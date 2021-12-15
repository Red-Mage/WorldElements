
$output = ""
$sizes = ""
$folders = gci -directory | % {$_.name}
foreach ($folder in $folders) {
    $files = gci -file $folder | % {$_.name}
    foreach ($file in $files) {
        $filename = $file -replace ".svg",""
        $test = get-content "$folder\$file" | % {$_ -split "<"} | where {$_ -like "*=*"} | % {$_ -split "`""}
        $output += "." + $folder + "-" + $filename + " {"
        #$output += "background-repeat: no-repeat;"
        #$output += "-webkit-mask-image: url(`"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='" + $test[3] + "'%3E%3Cpath d='" + $test[6] + "' /%3E%3C/svg%3E`");"
        $output += "mask-image: url(`"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='" + $test[3] + "'%3E%3Cpath d='" + $test[6] + "' /%3E%3C/svg%3E`");"
        $output += "}`n"
    }
}
$output > background-icons.css




































$viewbox_output = @("")
$data_output = "`n"
$class_output = "`n`n"
$folders = gci -directory | % {$_.name}
foreach ($folder in $folders) {
    $files = gci -file $folder | % {$_.name}
    foreach ($file in $files) {
        $filename = $file -replace ".svg",""
        $test = get-content "$folder\$file" | % {$_ -split "<"} | where {$_ -like "*=*"} | % {$_ -split "`""}

        $viewbox = $("--viewbox-" + $test[3]) -replace " ","-"
        $data = "--" + $folder + "-" + $filename

        $viewbox_string = "    " + $viewbox + ": " + $($test[3] -replace " ","_") + ";"
        $viewbox_output += "$viewbox_string"
        $data_output += "    " + $data + ": " + $test[6] + ";`n"

        $class_output += "." + $folder + "-" + $filename + " {"
        $class_output += "background-repeat: no-repeat;"
        $class_output += "-webkit-mask-image: url(`"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='var(" + $viewbox + ")'%3E%3Cpath d='var(" + $data + ")' /%3E%3C/svg%3E`");"
        $class_output += "mask-image: url(`"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='var(" + $viewbox + ")2'%3E%3Cpath d='var(" + $data + ")' /%3E%3C/svg%3E`");"
        $class_output += "}`n"



    }
}

$viewbox_output = $viewbox_output -replace "_"," "
$viewbox_output = $viewbox_output | Sort-Object -unique

":root {" > background-icons-vars.css
$viewbox_output >> background-icons-vars.css
$data_output >> background-icons-vars.css
"}" >> background-icons-vars.css
$class_output >> background-icons-vars.css

$viewbox_output | gm













$viewbox_output = @("")
$data_output = "`n"
$class_output = "`n`n"
$folders = gci -directory | % {$_.name}
foreach ($folder in $folders) {
    $files = gci -file $folder | % {$_.name}
    foreach ($file in $files) {
        $filename = $file -replace ".svg",""
        $test = get-content "$folder\$file" | % {$_ -split "<"} | where {$_ -like "*=*"} | % {$_ -split "`""}

        $viewbox = $("--viewbox-" + $test[3]) -replace " ","-"
        $data = "--" + $folder + "-" + $filename

        $viewbox_string = "    " + $viewbox + ": " + $test[3] + ";"
        $viewbox_output += "$viewbox_string"
        $data_output += "    " + $data + ": " + $test[6] + ";`n"

        $class_output += "." + $folder + "-" + $filename + " {"
        $class_output += "background-repeat: no-repeat;"
        $class_output += "-webkit-mask-image: var(--url-front) var(" + $viewbox + ") var(--url-middle) var(" + $data + ") var(--url-end);"
        $class_output += "mask-image: var(--url-front) var(" + $viewbox + ") var(--url-middle) var(" + $data + ") var(--url-end);"
        $class_output += "}`n"



    }
}

$viewbox_output = $viewbox_output | Sort-Object -unique

":root {" > background-icons-vars.css
"    --url-front: `"url(\`"data:image/svg+xml,%3Csvg xmlns=\`'http://www.w3.org/2000/svg\`' viewBox=\`'`";" >> background-icons-vars.css
"    --url-middle: `"\`'%3E%3Cpath d=\`'`";" >> background-icons-vars.css
"    --url-end: `"\`' /%3E%3C/svg%3E\`")`";" >> background-icons-vars.css
$viewbox_output >> background-icons-vars.css
$data_output >> background-icons-vars.css
"}" >> background-icons-vars.css
$class_output >> background-icons-vars.css
