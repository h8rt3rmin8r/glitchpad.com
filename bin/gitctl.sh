#! /usr/bin/env bash
#>_____________________________________________________________________________
#>
#> [ gitctl.sh ]
#>
#>                            @@              
#>                          @...@             
#>                           @@@%%%@@@        
#>           %%%                /@@..@@\      
#>         @%@\       .%%%%%%%%%%%@@@%%@@\    
#>        .%@%%     /@.PushIt...%@/   .@%%@\  
#>        |%@%%    |@..PullIt...@|    .%@%/\  
#>        |(@%@    |@...BopIt...@|     @@@/|  
#>        |/%@%@    \@....../%%@/     .@@..|  
#>         \/&@#@@@@/..._@@@@@@/      /@../   
#>          \((@@%%%%%%/             /////    
#>           \%%%%@@@@@@             |//      
#>            \%%%%%%@@@                      
#>              \%%%%%@                       
#>
#> ABOUT:
#>
#>    A simple git wrapper for basic local project operations
#>
#>    By default, all printed or suppressed verbosity messages are logged to
#>    local log files located in logs/ (relative to the location of the gitctl
#>    script). This logging feature can be disabled (see the "USAGE" section).
#>
#>    Source: https://github.com/h8rt3rmin8r/gitctl
#>
#> USAGE:
#>
#>    gitctl <OPTION>
#>    gitctl <OPTION> <OPERATION>
#>
#>    where "OPTION" is one or more of the following:
#>
#>                  |
#>    -d, --dump    | Dump the contents of all gitctl log files to the standard
#>                  | output (overrides any specified "OPERATION" parameters)
#>                  |
#>    -f, --find    | Try to find a local project root directory and print
#>                  | the result to the standard output (overrides any
#>                  | specified "OPERATION" parameters)
#>                  |
#>    -h, --help    | Print this help text to the terminal (overrides
#>                  | verbosity and logging)
#>                  |
#>    -l, --log     | Log all verbosity messages (default)
#>                  |
#>    -n, --no-log  | Avoid writing verbosity messages to a log file
#>                  |
#>    -p "X",       |
#>    --project="X" | Set the repository project directory to "X"; where "X"
#>                  | is the absolute path to a local project git repository
#>                  | (if not specified, gitctl will attempt to discover
#>                  | where the project is located)
#>                  |
#>                  | NOTE: You may need to wrap X in quotes if your directory
#>                  | path contains spaces
#>                  |
#>    -s, --silent  | Suppress verbosity messages
#>                  |
#>    -v, --verbose | Display verbosity messages (default)
#>                  |
#>
#>    and where "OPERATION" is one of the following:
#>
#>                  |
#>    --bop "X",    |
#>    --bopit "X"   | Stage all changes and subsequently push all staged
#>                  | changes to the remote repository (combines both the
#>                  | '--stage' and '--push' operations); This operation
#>                  | may include an optional commit message, "X"
#>                  |
#>    --check,      |
#>    --checkit     | Check the status of the remote repository as compared
#>                  | with the local one
#>                  |
#>    --pull,       |
#>    --pullit      | Pull the latest version of the remote repository
#>                  |
#>    --push,       |
#>    --pushit      | Push new updates to the remote repository (requires
#>                  | previous execution of '--stage')
#>                  |
#>    --stage "X",  |
#>    --stageit "X" | Stage all modified, deleted, and new files (this is a
#>                  | required step before running '--push'); May include
#>                  | an optional commit message, "X"
#>                  |
#>
#> REFERENCE:
#>
#>    # How to check the differences between local and github
#>    https://stackoverflow.com/a/6000939
#>
#>    # Staging all changes
#>    https://stackoverflow.com/a/26982422
#>
#> ATTRIBUTION & LICENSE:
#>
#>    Created by h8rt3rmin8r (161803398@email.tg) on 20200827
#>
#>    Copyright 2020 Novx.ai
#>
#>    Licensed under the Apache License, Version 2.0 (the "License");
#>    you may not use this file except in compliance with the License.
#>    You may obtain a copy of the License at
#>
#>        http://www.apache.org/licenses/LICENSE-2.0
#>
#>    Unless required by applicable law or agreed to in writing, software
#>    distributed under the License is distributed on an "AS IS" BASIS,
#>    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#>    See the License for the specific language governing permissions and
#>    limitations under the License.
#>
#>_____________________________________________________________________________

##-----------------------------------------------------------------------------
## Declare sub-functions

function gitctl_check() {
    ## Check the status of the remote repository

    gitctl_logger --info "${FUNCNAME}: Running operation: git remote update"

    git remote update
    
    local e_c="$?"

    if [[ "${e_c}" -ne 0 ]]; then
        gitctl_logger --error "${FUNCNAME}: Encountered an error while executing: git remote update"
        gitctl_logger --warning "${FUNCNAME}: Aborting remaining operations"

        return ${e_c}
    fi

    gitctl_logger --success "${FUNCNAME}: Completed operation: git remote update"
    gitctl_logger --info "${FUNCNAME}: Running operation: git status -uno"

    git status -uno

    local e_c="$?"

    if [[ "${e_c}" -ne 0 ]]; then
        gitctl_logger --error "${FUNCNAME}: Encountered an error while executing: git status -uno"
        gitctl_logger --warning "${FUNCNAME}: Aborting remaining operations"

        return ${e_c}
    fi

    gitctl_logger --success "${FUNCNAME}: Completed operation: git status -uno"

    return ${e_c}
}

function gitctl_dumplog() {
    ## Dump the entire contents of the gitctl log file to STDOUT

    if [[ ! -d "${lg_p}" ]]; then
        return 1
    fi

    cat "${lg_p}"/* 2>/dev/null

    return $?
}

function gitctl_hasgit() {
    ## Determine if an indicated directory has a ".git" directory inside
    ## If no input is detected, this function operates within the current directory

    if [[ "x${1}" == "x" ]]; then
        local i_n="${PWD}"
    else
        if [[ -d "${1}" ]]; then
            local i_n=$(readlink -f "${1}")
        else
            return 1
        fi
    fi

    gitctl_list_dir_names "${i_n}" \
        | grep -E '^[.]git$' &>/dev/null
    
    local e_c="$?"

    echo "${e_c}"

    return ${e_c}
}

function gitctl_help() {
    ## Print the gitctl help text to the terminal

    cat "${0}" \
        | grep -E '^#[>]' \
        | sed 's/^..//'

    return $?
}

function gitctl_list_dir_full() {
    ## List the absolute path to all directories within an indicated directory
    ## (includes hidden directories)
    ## If no input is detected, this function operates within the current directory

    if [[ "x${1}" == "x" ]]; then
        local i_n="${PWD}"
    else
        if [[ -d "${1}" ]]; then
            local i_n=$(readlink -f "${1}")
        else
            return 1
        fi
    fi

    find "${i_n}" -maxdepth 1 -type d -printf '%p\n' | tail -n +2

    return $?
}

function gitctl_list_dir_names() {
    ## List the names of all directories within an indicated directory
    ## (includes hidden directories)
    ## If no input is detected, this function operates within the current directory

    if [[ "x${1}" == "x" ]]; then
        local i_n="${PWD}"
    else
        if [[ -d "${1}" ]]; then
            local i_n=$(readlink -f "${1}")
        else
            return 1
        fi
    fi

    find "${i_n}" -maxdepth 1 -type d -printf '%p\n' | tail -n +2 | sed 's/^.*\///'

    return $?
}

function gitctl_logger() {
    ## Script logging and verbosity function

    local lg_type="I"                   ## log message type
    local lg_time="$(date '+%s')"       ## log entry timestamp
    local lg_name="${s_n}"              ## source script name
    local lg_ppid="$(gitctl_ppid)"      ## parent process ID
    local lg_code="${lg_x}${vb_x}"      ## operations to perform
    local lg_fnam="${lg_time:0:4}.log"  ## full log file name
    local lg_file="${lg_p}/${lg_fnam}"  ## log file absolute path

    ## If the log file storage directory does not exist, then something went
    ## really wrong earlier when we tried to 'mkdir' it. Force suppress the
    ## log file writing operations but continue with verbosity.

    if [[ ! -d "${lg_p}" ]]; then
        local lg_x="N"
        local lg_code="${lg_x}${vb_x}"
    fi

    ## Overwrite the current logging type if type has been specified in the
    ## first input parameter and set the verbosity message colors

    case "${1//[-]}" in
        e|err|eror|error)
            local lg_type="E"
            local lg_color="R"

            shift 1
            ;;
        i|info)
            local lg_type="I"
            local lg_color="B"

            shift 1
            ;;
        s|succ|success)
            local lg_type="S"
            local lg_color="G"

            shift 1
            ;;
        w|warn|warning)
            local lg_type="W"
            local lg_color="O"

            shift 1
            ;;
    esac

    local lg_message="$@"

    if [[ "x${lg_message}" == "x" ]]; then
        ## Set a fallback message if no message was given
        local lg_message="null"
    fi

    ## Compose the final logging/verbosity strings and fire off the logging process
    local lg_output="${lg_time}|${lg_ppid}|${lg_type}|${lg_name}|${lg_message}"

    if [[ "${lg_code:1:1}" == "Y" ]]; then
        case "${lg_color}" in
            B)
                ## blue
                local vc_type=$(printf "\e[0;49;94m${lg_type}\e[0m")
                local vc_message=$(printf "\e[0;49;94m${lg_message}\e[0m")
                ;;
            G)
                ## green
                local vc_type=$(printf "\e[38;5;82m${lg_type}\e[0m")
                local vc_message=$(printf "\e[38;5;82m${lg_message}\e[0m")
                ;;
            O)
                ## orange
                local vc_type=$(printf "\e[33m${lg_type}\e[0m")
                local vc_message=$(printf "\e[33m${lg_message}\e[0m")
                ;;
            R)
                ## red
                local vc_type=$(printf "\e[38;5;196m${lg_type}\e[0m")
                local vc_message=$(printf "\e[38;5;196m${lg_message}\e[0m")
                ;;
            *)
                ## fallback to blue
                local vc_type=$(printf "\e[0;49;94m${lg_type}\e[0m")
                local vc_message=$(printf "\e[0;49;94m${lg_message}\e[0m")
                ;;
        esac

        local vc_output="${lg_time}|${lg_ppid}|${vc_type}|${lg_name}|${vc_message}"
    fi

    case "${lg_code}" in
        YY)
            ## Write to log and STDOUT
            echo "${lg_output}" >> "${lg_file}"
            echo "${vc_output}" &>/dev/stderr
            ;;
        YN)
            ## Write to log only
            echo "${lg_output}" >> "${lg_file}"
            ;;
        NY)
            ## Write to STDOUT only
            echo "${vc_output}" &>/dev/stderr
            ;;
        NN)
            ## Do not write to log or STDOUT
            return 2
            ;;
    esac

    return $?
}

function gitctl_parentdir_path() {
    ## Isolate the parent directory to some input directory reference or name

    if [[ "x${1}" == "x" ]]; then
        return 1
    fi

    local i_n="${1}"
    local out="${i_n%\/*}"

    if [[ "x${out}" == "x" ]]; then
        return 1
    else
        echo "${out}"

        return 0
    fi
}

function gitctl_ppid() {
    ## Print the parent process ID with a seven-digit zero padding

    printf '%07d\n' "${PPID}"

    return $?
}

function gitctl_projecthome() {
    ## Determine the absolute path to the current project home

    ##
    ## Search around to see if the project home is nearby
    ##
    ## Use both the script directory and the invoking user's current directory
    ## as a starting point and check up to three parent directories above both
    ## locations while searching for a .git directory.
    ##

    local da_a="${s_d}"
    local da_b=$(gitctl_parentdir_path "${da_a}")
    local da_c=$(gitctl_parentdir_path "${da_b}")
    local db_a="${h_n}"
    local db_b=$(gitctl_parentdir_path "${db_a}")
    local db_c=$(gitctl_parentdir_path "${db_b}")

    declare -a search_places=( "${da_a}" "${da_b}" "${da_c}" "${db_a}" "${db_b}" "${db_c}" )

    local dir_found="N"

    gitctl_logger --info "${FUNCNAME}: No project home specified. Searching for project home ..."

    for i in "${search_places[@]}"; do
        local cycle_dir="${i}"
        local cycle_check=$(gitctl_hasgit "${cycle_dir}")

        if [[ "${cycle_check}" == "0" ]]; then
            local dir_found="Y"

            break
        fi
    done

    if [[ "${dir_found}" == "Y" ]]; then
        gitctl_logger --success "${FUNCNAME}: Project home found: ${cycle_dir}"

        echo "${cycle_dir}"

        return 0
    else
        gitctl_logger --error "${FUNCNAME}: Unable to find a valid repository home"

        echo "NULL"

        return 1
    fi
}

function gitctl_pull() {
    ## Pull the latest version of hotwire

    gitctl_logger --info "${FUNCNAME}: Beginning operation"

    git pull origin master

    local e_c="$?"

    if [[ "${e_c}" -ne 0 ]]; then
        gitctl_logger --error "${FUNCNAME}: Encountered an error while executing: 'git pull origin master'"
        gitctl_logger --warning "${FUNCNAME}: Aborting remaining operations"

        return ${e_c}
    fi

    gitctl_logger --success "${FUNCNAME}: Completed operation: git pull origin master"
    
    return ${e_c}
}

function gitctl_push() {
    ## Push updates to the hotwire repository

    gitctl_logger --info "${FUNCNAME}: Beginning operation"

    git push origin master

    local e_c="$?"

    if [[ "${e_c}" -ne 0 ]]; then
        gitctl_logger --error "${FUNCNAME}: Encountered an error while executing: 'git push origin master'"
        gitctl_logger --warning "${FUNCNAME}: Aborting remaining operations"

        return ${e_c}
    fi

    gitctl_logger --success "${FUNCNAME}: Completed operation: git push origin master"

    return ${e_c}
}

function gitctl_stageall() {
    ## Stage all modified, deleted, and new files in git

    gitctl_logger --info "${FUNCNAME}: Beginning operation"

    git add --all

    local e_c="$?"
    
    if [[ "${e_c}" -ne 0 ]]; then
        gitctl_logger --error "${FUNCNAME}: Encountered an error while executing: 'git add --all'"
        gitctl_logger --error "${FUNCNAME}: Operation aborted while INCOMPLETE"

        return ${e_c}
    fi

    if [[ "x$@" == "x" ]]; then
        ## No comments were detected; Auto-add a comment string
        local str_message="Generated by gitctl: $(date '+%s%N')"
    else
        local str_message="$@"
    fi

    git commit -m "${str_message}"

    local e_c="$?"

    if [[ "${e_c}" -ne 0 ]]; then
        gitctl_logger --error "${FUNCNAME}: Encountered an error while executing: ${_q1}git commit -m ${_q2}${str_message}${_q2}${_q1}"
        gitctl_logger --error "${FUNCNAME}: Operation aborted while INCOMPLETE"

        return ${e_c}
    fi

    gitctl_logger --success "${FUNCNAME}: All updates have been staged"
    gitctl_logger --info "${FUNCNAME}: Inserted commit message: ${str_message}"

    return ${e_c}
}

##-----------------------------------------------------------------------------
## Declare variables

h_n="${PWD}"                ## here now (current directory)
p_h=""                      ## project home directory
s_p=$(readlink -f "${0}")   ## script absoute path
s_d="${s_p%\/*}"            ## script home directory
s_f="${0//*\/}"             ## script file name
s_n="${s_f%[.]sh}"          ## script short name
lg_x="Y"                    ## is logging turned on
vb_x="Y"                    ## is verbosity turned on
lg_r="logs"                 ## log files relative path
lg_p="${s_d}/${lg_r}"       ## log files absolute path

##-----------------------------------------------------------------------------
## Execute operations

mkdir -p "${lg_p}"

if [[ "x${1}" == "x" ]]; then
    ## kill the script if no inputs are present

    gitctl_logger --error "main: No inputs were detected"
    gitctl_logger --info "main: Use --help for more information"

    exit 1
fi

## process core options inputs

in_test=$(grep -E '^-{1,2}((d|f|h|H|l|n|p|s|v)$|(dump|find|help|log|nolog|project|silent|verbose))' <<<"${1}" &>/dev/null; echo $?)

while [[ "${in_test}" -eq 0 ]]; do
    cycle_base_pre="${1#[-]}"
    cycle_base="${cycle_base_pre#[-]}"
    cycle_prefix_pre="${cycle_base//[=]*}"
    cycle_prefix="${cycle_prefix_pre//[-]}"
    cycle_suffix="${cycle_base#*[=]}"

    case "${cycle_prefix}" in
        d|dump)
            vb_x="N"

            gitctl_dumplog

            exit $?
            ;;
        f|find)
            vb_x="N"

            gitctl_projecthome

            exit $?
            ;;
        h|H|help)
            gitctl_help

            exit $?
            ;;
        l|log)
            lg_x="Y"
            ;;
        n|nolog)
            lg_x="N"
            ;;
        p|project)
            p_h=$(readlink -f "${cycle_suffix}")

            if [[ ! -d "${p_h}" ]]; then
                gitctl_logger --error "main: Indicated project directory does not exist: ${p_h}"
                gitctl_logger --info "main: Use --help for more information"

                exit 1
            fi
            ;;
        s|silent)
            vb_x="N"
            ;;
        v|verbose)
            vb_x="Y"
            ;;
    esac

    shift 1

    in_test=$(grep -E '^-{1,2}((d|f|h|H|l|n|p|s|v)$|(dump|find|help|log|nolog|project|silent|verbose))' <<<"${1}" &>/dev/null; echo $?)
done

## kill the script if no further inputs were supplied

if [[ "x${1}" == "x" ]]; then
    gitctl_logger --error "main: No git process was indicated so no changes were made"
    gitctl_logger --info "main: Use --help for more information"

    exit 1
fi

## discover the project home directory if it still remains undefined

if [[ ! -d "${p_h}" ]]; then
    p_h="$(gitctl_projecthome)"

    if [[ "${p_h}" == "NULL" ]]; then
        ## kill the script if no project home directory could be found
        exit 1
    fi
fi

## process the main git operation indicated by the user

case "${1//[-]}" in
    b|bop|bopit)
        shift 1

        cd "${p_h}"

        if [[ "$#" -gt 0 ]]; then
            gitctl_stageall "$@"
        else
            gitctl_stageall
        fi
        
        gitctl_push

        e_c="$?"

        cd "${h_n}"
        ;;
    c|check|checkit)
        shift 1

        cd "${p_h}"

        gitctl_check

        e_c="$?"

        cd "${h_n}"
        ;;
    pull|pullit)
        shift 1

        cd "${p_h}"

        gitctl_pull

        e_c="$?"

        cd "${h_n}"
        ;;
    push|pushit)
        shift 1

        cd "${p_h}"

        gitctl_push

        e_c="$?"

        cd "${h_n}"
        ;;
    stage|stageit|stageall)
        shift 1

        cd "${p_h}"
        
        if [[ "$#" -gt 0 ]]; then
            gitctl_stageall "$@"
        else
            gitctl_stageall
        fi

        e_c="$?"

        cd "${h_n}"
        ;;
    *)
        gitctl_logger --error "main: An unknown git operation was specified: ${1}"

        exit 1
        ;;
esac

exit ${e_c}
