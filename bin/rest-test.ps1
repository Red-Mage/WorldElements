# update active project
$body = @{
    project_id = "00000002"
}

$json = $body | ConvertTo-Json

Invoke-RestMethod "http://127.0.0.1:5000/api/settings/project" -Method PUT -ContentType 'application/json' -Body $json


# update active volume
$body = @{
    volume_id = "00000003"
}

$json = $body | ConvertTo-Json

Invoke-RestMethod "http://127.0.0.1:5000/api/settings/volume" -Method PUT -ContentType 'application/json' -Body $json


# add new world
$body = @{
    id = "00000007"
    position = "00000000"
    name = "test"
    type = "test"
    synopsis = "test"
    description = "test"
    deleted = "0"
}

$json = $body | ConvertTo-Json

Invoke-RestMethod "http://127.0.0.1:5000/api/worlds" -Method POST -ContentType 'application/json' -Body $json


# update specified world
$body = @{
    id = "00000007"
    position = "00000002"
    name = "test"
    type = "test"
    synopsis = "test"
    description = "test"
    deleted = "0"
}

$json = $body | ConvertTo-Json

Invoke-RestMethod "http://127.0.0.1:5000/api/worlds/00000007" -Method PUT -ContentType 'application/json' -Body $json


# deletes specified world
$body = @{
    id = "00000007"
    position = "00000002"
    name = "test"
    type = "test"
    synopsis = "test"
    description = "test"
    deleted = "1"
}

$json = $body | ConvertTo-Json

Invoke-RestMethod "http://127.0.0.1:5000/api/worlds/00000007" -Method DELETE -ContentType 'application/json' -Body $json


# adds new project
$body = @{
    id = "00000007"
    position = "00000003"
    name = "test"
    synopsis = "test"
    description = "test"
    deleted = "0"
}

$json = $body | ConvertTo-Json

Invoke-RestMethod "http://127.0.0.1:5000/api/projects" -Method POST -ContentType 'application/json' -Body $json


# updates specified project
$body = @{
    id = "00000007"
    position = "00000003"
    name = "test"
    synopsis = "test"
    description = "test"
    deleted = "0"
}

$json = $body | ConvertTo-Json

Invoke-RestMethod "http://127.0.0.1:5000/api/projects/00000007" -Method PUT -ContentType 'application/json' -Body $json


# adds new volume
$body = @{
    id = "00000007"
    position = "00000002"
    project_id = "00000001"
    title = "test"
    subtitle = "test"
    edition = "test"
    synopsis = "test"
    description = "test"
    world_ids = "00000001"
    deleted = "0"
}

$json = $body | ConvertTo-Json

Invoke-RestMethod "http://127.0.0.1:5000/api/volumes" -Method POST -ContentType 'application/json' -Body $json


















































