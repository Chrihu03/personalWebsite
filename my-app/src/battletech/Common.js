const hitLocations = [['Left Torso [Crit]','Center Torso [Crit]','Right Torso [Crit]'],
                      ['Leg Leg','Right Arm','Right Leg'],
                      ['Left Arm','Right Arm','Right Arm'],
                      ['Left Arm','Right Leg','Right Arm'],
                      ['Left Leg','Right Torso','Right Leg'],
                      ['Left Torso','Center Torso','Right Torso'],
                      ['Center Torso','Left Torso','Center Torso'],
                      ['Right Toso','Left Leg','Left Torso'],
                      ['Right Arm','Left Arm','Left Arm'],
                      ['Right Leg','Left Arm','Left Leg'],
                      ['Head','Head','Head']];

const punchTable = [['Left Torso','Left Arm','Right Torso'],
                   ['Left Torso','Left Torso',' Right Torso'],
                   ['Center Torso','Center Torso','Center Torso'],
                   ['Left Arm','Right Torso','Right Arm'],
                   ['Left Arm','Right Arm','Right Arm'],
                   ['Head','Head','Head']];

const punchTableQuad = [['Left Torso','Left Front Leg','Right Torso'],
                        ['Left Torso','Left Torso',' Right Torso'],
                        ['Center Torso','Center Torso','Center Torso'],
                        ['Left Front Leg','Right Torso','Right Front'],
                        ['Left Rear Leg','Right Front Leg','Right Rear Leg'],
                        ['Head','Head','Head']];

const kickTable = [['Left Leg','Right Leg','Right Leg'],
                   ['Left Leg','Left Leg','Right Leg']];

const kickTableQuad = [['Left Front Leg','Right Front Leg','Right Front Leg'],
                       ['Left Back Leg','Left  Front Leg','Right Rear Leg']];                   

function getSideIndex(side) {
    switch(side) {
        case 'left': return 0;
        case 'front': return 1;
        case 'right': return 2;
        default: return 1;
    }
}                       

export function randomInt(min, max) {
    return (Math.floor(Math.random() * (max - min + 1) + min));
}

export function getMechLocation(side, mechType, table) {
    let rollData = '';
    let location = '';
    if (table === 'full') {
        let roll = randomInt(1, 6) + randomInt(1, 6);
        rollData += roll;
        // Standard hit talble is 2 - 12 and the array indexes become 0 - 10 
        // So we nee to subtract 2 to make the rolls align with the array.
        location = hitLocations[roll - 2][getSideIndex(side)];
        if (mechType === 'quad') {
            if (location.includes('Arm')) {
                location = location.replace('Arm', 'Front Leg');
            } else if (location.includes('Leg')) {
                location = location.replace('Leg', 'Rear Leg');
            }
        } else if (mechType === 'tripod') {
            if (location.includes('Leg')){
                let legRoll = randomInt(1,6);
                if (side === 'right') {
                    legRoll -= 1;
                } else if (side === 'left') {
                    legRoll += 1;
                }
                if (legRoll <= 2) {
                    location = 'Right Leg';
                } else if (legRoll <= 4) {
                    location = 'Center Leg';
                } else {
                    location = 'Left Leg';
                }
                rollData += ', ' + legRoll;
            }
        }
    } else if (table === 'punch') {
        let roll = randomInt(1, 6);
        rollData += roll;
        const tableRow = (roll <=3) ? 0 : 1;
        if (mechType === 'quad') {
            location = punchTableQuad[tableRow][getSideIndex(side)];
            if (side === 'back' && location.includes('Front')) {
                location = location.replace('Front', 'Back');
            }
        } else {
            location = punchTable[tableRow][getSideIndex(side)];
        }
    } else {
        let roll = randomInt(1, 6);
        const tableRow = (roll <=3) ? 0 : 1;
        if (mechType === 'biped') {
            location = kickTable[tableRow][getSideIndex(side)];
        } else if (mechType === 'quad') {
            location = kickTableQuad[tableRow][getSideIndex(side)];
            if (side === 'back' && location.includes('Front')) {
                location = location.replace('Front', 'Back');
            }
        } else {
            if (side === 'right') {
                roll -= 1;
            } else if (side === 'left') {
                roll += 1;
            }
            if (roll <= 2) {
                location = 'Right Leg';
            } else if (roll <= 4) {
                location = 'Center Leg';
            } else {
                location = 'Left Leg';
            }
        }
        rollData += roll;
    }
    return ({rollData: rollData, location:location});
}