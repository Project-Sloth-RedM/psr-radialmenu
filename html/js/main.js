'use strict';

var PSRRadialMenu = null;

$(document).ready(function(){
    window.addEventListener('message', function(event){
        switch (event.data.action) {
            case "ui":
                if (event.data.radial) {
                    createMenu(event.data.items)
                    PSRRadialMenu.open();
                } else {
                    PSRRadialMenu.close(true);
                }
        }
    });
});

function createMenu(items) {
    PSRRadialMenu = new RadialMenu({
        parent      : document.body,
        size        : 375,
        menuItems   : items,
        onClick     : function(item) {
            if (item.shouldClose) {
                PSRRadialMenu.close(true);
            }
            
            if (item.items == null && item.shouldClose != null) {
                $.post('https://psr-radialmenu/selectItem', JSON.stringify({
                    itemData: item
                }))
            }
        }
    });
}

// Close on escape pressed
$(document).on('keydown', function(e) {
    switch(e.key) {
        case "Escape":
            PSRRadialMenu.close();
            break;
    }
});

// Close on any key up, hold/release support incase user changes keybind on the fivem side
$(document).on('keyup', function(e) {
    PSRRadialMenu.close();
});
