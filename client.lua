RegisterNUICallback('update_data', function(data,cb)
    print('hello from lua', data.count)
    cb(1) -- bu lazım yoksa error atıyor
end)

RegisterCommand('sa', function()
    SendNUIMessage({
        action = 'fetch_data',
        data = {
            count = 1
        }
    })
end)
