Config = {}

Config.EnableExtraMenu = false

Config.MenuItems = {
    [1] = {
        id = 'example1',
        title = 'World',
        icon = 'globe',
        items = {
        },
    }, 
    [2] = {
        id = 'example2',
        title = 'Horse',
        icon = 'horse-head',
        items = {
        },
    },    
    [3] = {
        id = 'example3',
        title = 'User',
        icon = 'user',
        items = {
        },
    },
}

Config.JobInteractions = {
    ["ambulance"] = {
        {
            id = 'emsexample1',
            title = 'Check Health Status',
            icon = 'heart-pulse',
            type = 'client',
            event = 'hospital:client:CheckStatus',
            shouldClose = true
        },
    },
    ["police"] = {
		{
			id = 'copexample1',
			title = 'Cuff',
			icon = 'user-lock',
			type = 'client',
			event = 'police:client:CuffPlayerSoft',
			shouldClose = true
		}, 
    },
}