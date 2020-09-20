// array in local storage for registered users
let users = JSON.parse(localStorage.getItem('users')) || [];

// flights collection
if(!localStorage.getItem('flights')) {
		//full date format
		var dateObj = new Date();
		var month = String(dateObj.getMonth() + 1).padStart(2, '0');
		var day = parseInt(String(dateObj.getDate()).padStart(2, '0'));
		var year = dateObj.getFullYear();
		var dateOutput = month + '/' + year;

		var flights = {"collection": [
				{
					"source": "Delhi",
					"destination": "Bangalore",
					"date": (day + 1) + '/' + dateOutput,
					"flightName": "Vistara",
					"flightNumber": "V01"
					},
				{
					"source": "Bangalore",
					"destination": "Chennai",
					"date": (day + 2) + '/' + dateOutput,
					"flightName": "Indigo",
					"flightNumber": "I01"
					},
				{
					"source": "Delhi",
					"destination": "Bangalore",
					"date": (day + 3) + '/' + dateOutput,
					"flightName": "Air India",
					"flightNumber": "A01"
					},
				{
					"source": "Chennai",
					"destination": "Delhi",
					"date": (day + 5) + '/' + dateOutput,
					"flightName": "Vistara",
					"flightNumber": "V02"
					},
				{
					"source": "Chennai",
					"destination": "Delhi",
					"date": (day + 1) + '/' + dateOutput,
					"flightName": "Air India",
					"flightNumber": "A02"
					},
				{
					"source": "Delhi",
					"destination": "Chennai",
					"date": (day + 1) + '/' + dateOutput,
					"flightName": "Vistara",
					"flightNumber": "V03"
					},
				{
					"source": "Delhi",
					"destination": "Bangalore",
					"date": (day + 1) + '/' + dateOutput,
					"flightName": "Indigo",
					"flightNumber": "I02"
					},
				{
					"source": "Delhi",
					"destination": "Chennai",
					"date": (day + 1) + '/' + dateOutput,
					"flightName": "Vistara",
					"flightNumber": "V04"
					},
				{
					"source": "Delhi",
					"destination": "Bangalore",
					"date": (day + 2) + '/' + dateOutput,
					"flightName": "Indigo",
					"flightNumber": "I03"
					},
				{
					"source": "Bangalore",
					"destination": "Delhi",
					"date": (day + 4) + '/' + dateOutput,
					"flightName": "Air India",
					"flightNumber": "A03"
					},
				{
					"source": "Chennai",
					"destination": "Bangalore",
					"date": (day + 5) + '/' + dateOutput,
					"flightName": "Vistara",
					"flightNumber": "V05"
					},
				{
					"source": "Chennai",
					"destination": "Bangalore",
					"date": (day + 3) + '/' + dateOutput,
					"flightName": "Indigo",
					"flightNumber": "I04"
					},
				{
					"source": "Bangalore",
					"destination": "Delhi",
					"date": (day + 4) + '/' + dateOutput,
					"flightName": "Vistara",
					"flightNumber": "V06"
					},
				{
					"source": "Delhi",
					"destination": "Bangalore",
					"date": (day + 1) + '/' + dateOutput,
					"flightName": "Vistara",
					"flightNumber": "V07"
					},
				{
					"source": "Bangalore",
					"destination": "Delhi",
					"date": (day + 5) + '/' + dateOutput,
					"flightName": "Indigo",
					"flightNumber": "I05"
					},
				{
					"source": "Delhi",
					"destination": "Bangalore",
					"date": (day + 6) + '/' + dateOutput,
					"flightName": "Vistara",
					"flightNumber": "V08"
					},
				{
					"source": "Delhi",
					"destination": "Bangalore",
					"date": (day + 6) + '/' + dateOutput,
					"flightName": "Indigo",
					"flightNumber": "I06"
					},
				{
					"source": "Bangalore",
					"destination": "Chennai",
					"date": (day + 2) + '/' + dateOutput,
					"flightName": "Vistara",
					"flightNumber": "V09"
					},
				{
					"source": "Chennai",
					"destination": "Bangalore",
					"date": (day + 3) + '/' + dateOutput,
					"flightName": "Indigo",
					"flightNumber": "I07"
					},
				{
					"source": "Bangalore",
					"destination": "Delhi",
					"date": (day + 4) + '/' + dateOutput,
					"flightName": "Indigo",
					"flightNumber": "I08"
					},
				{
					"source": "Delhi",
					"destination": "Bangalore",
					"date": (day + 5) + '/' + dateOutput,
					"flightName": "Vistara",
					"flightNumber": "V10"
					},
				{
					"source": "Chennai",
					"destination": "Delhi",
					"date": (day + 1) + '/' + dateOutput,
					"flightName": "Indigo",
					"flightNumber": "I09"
					},
				{
					"source": "Delhi",
					"destination": "Chennai",
					"date": (day + 4) + '/' + dateOutput,
					"flightName": "Air India",
					"flightNumber": "A04"
					},
				{
					"source": "Delhi",
					"destination": "Chennai",
					"date": (day + 3) + '/' + dateOutput,
					"flightName": "Indigo",
					"flightNumber": "I10"
					},
				{
					"source": "Delhi",
					"destination": "Bangalore",
					"date": (day + 2) + '/' + dateOutput,
					"flightName": "Vistara",
					"flightNumber": "V11"
					},
				{
					"source": "Bangalore",
					"destination": "Chennai",
					"date": (day + 6) + '/' + dateOutput,
					"flightName": "Indigo",
					"flightNumber": "I11"
					},
				{
					"source": "Chennai",
					"destination": "Bangalore",
					"date": (day + 5) + '/' + dateOutput,
					"flightName": "Indigo",
					"flightNumber": "I12"
					},
				{
					"source": "Chennai",
					"destination": "Bangalore",
					"date": (day + 4) + '/' + dateOutput,
					"flightName": "Vistara",
					"flightNumber": "V12"
					},
				{
					"source": "Delhi",
					"destination": "Bangalore",
					"date": (day + 5) + '/' + dateOutput,
					"flightName": "Vistara",
					"flightNumber": "V13"
					},
				{
					"source": "Bangalore",
					"destination": "Delhi",
					"date": (day + 2) + '/' + dateOutput,
					"flightName": "Indigo",
					"flightNumber": "I13"
					},
				{
					"source": "Delhi",
					"destination": "Bangalore",
					"date": (day + 1) + '/' + dateOutput,
					"flightName": "Air India",
					"flightNumber": "A05"
					},
				{
					"source": "Bangalore",
					"destination": "Delhi",
					"date": (day + 2) + '/' + dateOutput,
					"flightName": "Vistara",
					"flightNumber": "V14"
					},
				{
					"source": "Delhi",
					"destination": "Bangalore",
					"date": (day + 4) + '/' + dateOutput,
					"flightName": "Vistara",
					"flightNumber": "V15"
					},
				{
					"source": "Chennai",
					"destination": "Delhi",
					"date": (day + 3) + '/' + dateOutput,
					"flightName": "Vistara",
					"flightNumber": "V16"
					},
				{
					"source": "Delhi",
					"destination": "Chennai",
					"date": (day + 2) + '/' + dateOutput,
					"flightName": "Indigo",
					"flightNumber": "I14"
					},
				{
					"source": "Delhi",
					"destination": "Chennai",
					"date": (day + 1) + '/' + dateOutput,
					"flightName": "Air India",
					"flightNumber": "A06"
					},
				{
					"source": "Delhi",
					"destination": "Bangalore",
					"date": (day + 5) + '/' + dateOutput,
					"flightName": "Indigo",
					"flightNumber": "I15"
					},
				{
					"source": "Chennai",
					"destination": "Bangalore",
					"date": (day + 6) + '/' + dateOutput,
					"flightName": "Vistara",
					"flightNumber": "V17"
					},
				{
					"source": "Delhi",
					"destination": "Bangalore",
					"date": (day + 7) + '/' + dateOutput,
					"flightName": "Vistara",
					"flightNumber": "V18"
					},
				{
					"source": "Bangalore",
					"destination": "Chennai",
					"date": (day + 5) + '/' + dateOutput,
					"flightName": "Air India",
					"flightNumber": "A07"
					},
				{
					"source": "Chennai",
					"destination": "Bangalore",
					"date": (day + 7) + '/' + dateOutput,
					"flightName": "Air India",
					"flightNumber": "A08"
					},
				{
					"source": "Bangalore",
					"destination": "Delhi",
					"date": (day + 4) + '/' + dateOutput,
					"flightName": "Indigo",
					"flightNumber": "I16"
					},
				{
					"source": "Delhi",
					"destination": "Bangalore",
					"date": (day + 3) + '/' + dateOutput,
					"flightName": "Vistara",
					"flightNumber": "V19"
					},
				{
					"source": "Delhi",
					"destination": "Bangalore",
					"date": (day + 1) + '/' + dateOutput,
					"flightName": "Indigo",
					"flightNumber": "I17"
					},
				{
					"source": "Bangalore",
					"destination": "Chennai",
					"date": (day + 2) + '/' + dateOutput,
					"flightName": "Air India",
					"flightNumber": "A09"
					},
				{
					"source": "Chennai",
					"destination": "Bangalore",
					"date": (day + 5) + '/' + dateOutput,
					"flightName": "Air India",
					"flightNumber": "A10"
					},
				{
					"source": "Delhi",
					"destination": "Chennai",
					"date": (day + 4) + '/' + dateOutput,
					"flightName": "Indigo",
					"flightNumber": "I18"
					},
				{
					"source": "Chennai",
					"destination": "Bangalore",
					"date": (day + 3) + '/' + dateOutput,
					"flightName": "Air India",
					"flightNumber": "A11"
					},
				{
					"source": "Delhi",
					"destination": "Chennai",
					"date": (day + 2) + '/' + dateOutput,
					"flightName": "Air India",
					"flightNumber": "A12"
					},
				{
					"source": "Chennai",
					"destination": "Bangalore",
					"date": (day + 1) + '/' + dateOutput,
					"flightName": "Air India",
					"flightNumber": "A13"
					},
				{
					"source": "Delhi",
					"destination": "Chennai",
					"date": (day + 6) + '/' + dateOutput,
					"flightName": "Indigo",
					"flightNumber": "I19"
					},
				{
					"source": "Chennai",
					"destination": "Delhi",
					"date": (day + 7) + '/' + dateOutput,
					"flightName": "Air India",
					"flightNumber": "A14"
					},
				{
					"source": "Bangalore",
					"destination": "Delhi",
					"date": (day + 1) + '/' + dateOutput,
					"flightName": "Indigo",
					"flightNumber": "I20"
					},
				{
					"source": "Delhi",
					"destination": "Bangalore",
					"date": (day + 6) + '/' + dateOutput,
					"flightName": "Air India",
					"flightNumber": "A15"
					},
				{
					"source": "Chennai",
					"destination": "Bangalore",
					"date": (day + 7) + '/' + dateOutput,
					"flightName": "Air India",
					"flightNumber": "A16"
					},
				{
					"source": "Delhi",
					"destination": "Chennai",
					"date": (day + 5) + '/' + dateOutput,
					"flightName": "Air India",
					"flightNumber": "A17"
					},
				{
					"source": "Bangalore",
					"destination": "Chennai",
					"date": (day + 4) + '/' + dateOutput,
					"flightName": "Indigo",
					"flightNumber": "V21"
					}
		]};
		
		localStorage.setItem('flights', JSON.stringify(flights));
	}
	

export function configureFakeBackend() {
    let realFetch = window.fetch;
    window.fetch = function (url, opts) {
        return new Promise((resolve, reject) => {
            // wrap in timeout to simulate server api call
            setTimeout(() => {

                // authenticate
                if (url.endsWith('/users/authenticate') && opts.method === 'POST') {
                    // get parameters from post request
                    let params = JSON.parse(opts.body);
                    // find if any user matches login credentials
                    let filteredUsers = users.filter(user => {
                        return user.mobileNo === params.mobileNo && user.password === params.password;
                    });
                    
                    if (filteredUsers.length) {
                        // if login details are valid return user details and fake jwt token
                        let user = filteredUsers[0];
						let responseJson = {
                            id: user.id,
                            email: user.email,
                            mobileNo: user.mobileNo,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            token: 'fake-jwt-token'
                        };
                        resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(responseJson)) });
                    } else {
                        // else return error
                        reject('mobileNo or password is incorrect');
                    }

                    return;
                }

                // get users
                if (url.endsWith('/users') && opts.method === 'GET') {
                    // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                    if (opts.headers && opts.headers.Authorization === 'Bearer fake-jwt-token') {
                        resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(users))});
                    } else {
                        // return 401 not authorised if token is null or invalid
                        reject('Unauthorised');
                    }

                    return;
                }

                // get user by id
                if (url.match(/\/users\/\d+$/) && opts.method === 'GET') {
                    // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                    if (opts.headers && opts.headers.Authorization === 'Bearer fake-jwt-token') {
                        // find user by id in users array
                        let urlParts = url.split('/');
                        let id = parseInt(urlParts[urlParts.length - 1]);
                        let matchedUsers = users.filter(user => { return user.id === id; });
                        let user = matchedUsers.length ? matchedUsers[0] : null;

                        // respond 200 OK with user
                        resolve({ ok: true, text: () => JSON.stringify(user)});
                    } else {
                        // return 401 not authorised if token is null or invalid
                        reject('Unauthorised');
                    }

                    return;
                }

                // register user
                if (url.endsWith('/users/register') && opts.method === 'POST') {
                    // get new user object from post body
                    let newUser = JSON.parse(opts.body);

                    // validation
                    let duplicateUser = users.filter(user => { return user.mobileNo === newUser.mobileNo; }).length;
                    if (duplicateUser) {
                        reject('mobileNo "' + newUser.mobileNo + '" is already taken');
                        return;
                    }

                    // save new user
                    newUser.id = users.length ? Math.max(...users.map(user => user.id)) + 1 : 1;
                    users.push(newUser);
                    localStorage.setItem('users', JSON.stringify(users));

                    // respond 200 OK
                    resolve({ ok: true, text: () => Promise.resolve() });

                    return;
                }

                // hold seat for user
                if (url.endsWith('/users/hold_booking') && opts.method === 'POST') {
                    // get new user object from post body
                    let params = JSON.parse(opts.body);
                    localStorage.setItem('seatDetails', JSON.stringify(params.seatDetails));

                    // respond 200 OK
                    resolve({ ok: true, text: () => Promise.resolve() });

                    return;
                }

                // confirm seats for user
                if (url.match(/\/users\/confirm_booking\/\d+$/) && opts.method === 'POST') {
                    if (opts.headers && opts.headers.Authorization === 'Bearer fake-jwt-token') {
                        // find user by id in users array
                        let urlParts = url.split('/');
                        let id = parseInt(urlParts[urlParts.length - 1]);

                        // get seatInfo object from post body
                        let seatDetails = localStorage.getItem('seatDetails');
                        seatDetails = JSON.parse(seatDetails);

                        // validation
                        let duplicateSeat = users.filter(user => {
                            return user.seatDetails && user.seatDetails.seatInfo.label == seatDetails.seatInfo.label
                        }).length;

                        if (duplicateSeat) {
                            reject('Seat: "' + seatDetails.seatInfo.label + '" is already taken');
                            return;
                        }

                        // save seatInfo for user
                        for (let i = 0; i < users.length; i++) {
                            let user = users[i];
                            if (user.id === id) {
                                users[i].seatDetails = seatDetails;
                                localStorage.setItem('users', JSON.stringify(users));
                                break;
                            }
                        }

                        // respond 200 OK
                        resolve({ok: true, text: () => Promise.resolve()});
                    } else {
                        // return 401 not authorised if token is null or invalid
                        reject('Unauthorised');
                    }

                    return;
                }



                // delete user
                if (url.match(/\/users\/\d+$/) && opts.method === 'DELETE') {
                    // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                    if (opts.headers && opts.headers.Authorization === 'Bearer fake-jwt-token') {
                        // find user by id in users array
                        let urlParts = url.split('/');
                        let id = parseInt(urlParts[urlParts.length - 1]);
                        for (let i = 0; i < users.length; i++) {
                            let user = users[i];
                            if (user.id === id) {
                                // delete user
                                users.splice(i, 1);
                                localStorage.setItem('users', JSON.stringify(users));
                                break;
                            }
                        }

                        // respond 200 OK
                        resolve({ ok: true, text: () => Promise.resolve() });
                    } else {
                        // return 401 not authorised if token is null or invalid
                        reject('Unauthorised');
                    }

                    return;
                }

                // pass through any requests not handled above
                realFetch(url, opts).then(response => resolve(response));

            }, 500);
        });
    }
}