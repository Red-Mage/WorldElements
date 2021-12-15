$body = @{
    project_id = "00000002"
}

$json = $body | ConvertTo-Json

Invoke-RestMethod "http://127.0.0.1:5000/api/settings/project" -Method PUT -ContentType 'application/json' -Body $json



$body = @{
    volume_id = "00000003"
}

$json = $body | ConvertTo-Json

Invoke-RestMethod "http://127.0.0.1:5000/api/settings/volume" -Method PUT -ContentType 'application/json' -Body $json
