//Reasturant Seating Simulation

//Objects: Guest
//         Table
//         Time
//         Restaurant

//Relationships: Restuarant is open for a certain amount of hours. Guests come asking for a table to dine. 
//               Diners have 60 minutes to use the table. If no table is available guests are not accepted.

//Evolution: A restaurant is open for 7 hours. Last call for table is 6 hours. Depending on the amount of guests in the party,
//           a certain size table is selected and no longer available. The time seated begins leading up to 60 minutes
//           total dine time before the table is freed for use again for more guests.
//           If no tables are available for the guests, they are turned away. If serving time exceeds 6 hrs, the kitchen is closed.     



function assignTable(table, guest) {
    if ((guest.count <=2) && (table.sm === true)) {
        table.sm = false;      
    } else if ((guest.count <=4) && (table.med === true)) {
        table.med = false;
    } else if ((guest.count <= 6) && (table.lg === true)) {
        table.lg = false;
    } else {
        table.msg = "Table is not available.";
    }
}


function timeSeated(time) {
    time.onehour += 10;    //add in increments of 10 min
    console.log(JSON.stringify(time, null, 2));

    if (time.onehour >= time.expired) {
        releaseTable(table, guest);
        console.log(JSON.stringify(table, guest, null, 2));
    }
}


function releaseTable(table, guest) {
    if (guest.count <=2) {
        table.sm = true;
    } else if (guest.count <=4) {
        table.med = true;
    } else {
        table.lg = true;
    }
}


function main () {

    const guest = {
        "count" : 2
    }

    const table = {
        "sm" : true,
        "med" : true,
        "lg" : true,
        "msg" : null,
    };

    const time = {
        "onehour" : 0,    
        "expired" : 60
    };

    const rest = {
        "serve_hrs" : 6,
        "msg" : "Last seating no longer available. Kitchen closing."
    }

    while (rest.serve_hrs < 7) {    
        assignTable(table, guest);
        console.log(JSON.stringify(table, time, guest, null, 2));

        while ((table.sm === false) || (table.med === false) || (table.lg === false)) {
                timeSeated(table, time, guest);
                console.log(JSON.stringify(table, time, guest, null, 2));
        }

        rest.serve_hrs += 1;
        console.log(JSON.stringify(rest, table, time, guest, null, 2));
    }

    rest.msg;
    console.log(JSON.stringify(rest, null, 2));

};


main();