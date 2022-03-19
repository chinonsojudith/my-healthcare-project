// https://612b668c22bb490017893b1d.mockapi.io/health/v1/patients


// patient api
let patientURL = "https://612b668c22bb490017893b1d.mockapi.io/health/v1/patients";
fetch(patientURL)
    .then(response => response.json())
    .then(data => {
        // console.log(data);
        let totalPatient = data.totalPatients
        let waitingRoom = data.waitinfRoom
        let appointment = data.appointments

        let totalAppointment = appointment.length;
        document.getElementById("number-of-appointment").innerHTML = totalAppointment
        document.getElementById("number-of-patients").innerHTML= totalPatient
        document.getElementById("total-patient").innerHTML = totalPatient
        document.getElementById("appointment").innerHTML = totalAppointment
        document.getElementById("waiting-room").innerHTML = waitingRoom

        appointment.forEach(details => {

            let d = new Date(details.createdAt);
            let hour, mainHour, minute, timeFrame;
            if(d.getHours() > 11){
                hour = d.getHours() - 12;
                timeFrame = 'pm'
                if(hour <= 9){
                    mainHour = '0' + hour;
                } else {
                    mainHour = hour;
                }
            } else {
                hour = d.getHours();
                timeFrame = 'am'
                if(hour <= 9){
                    mainHour = '0' + hour;
                } else {
                    mainHour = hour;
                }
            }
            if(d.getMinutes() <= 9){
                minute = '0' + d.getMinutes()
            } else {
                minute = d.getMinutes()
            }

            
            document.querySelector('.patient-list-container').innerHTML += `
            <div class="patient-flex">
            <div class="time">
            ${mainHour}:${minute}${timeFrame}
            </div>
            <div class="patient-patient">
                <div class="dot-flex">
                    <div class="d-flex">
                         <img src="img/Ellipse 16.svg" class="">
                        <div class="name"> ${details.name}</div>
                     </div>
                    <div><img src="img/dot.svg"></div>
                </div>

            </div>
        </div>
            `
        })


        
    })


    // Activities: https://612b668c22bb490017893b1d.mockapi.io/health/v1/activites

    let activityURL = "https://612b668c22bb490017893b1d.mockapi.io/health/v1/activites";
    fetch(activityURL)
        .then(response => response.json())
        .then(data2 => {
            console.log(data2);

            let activities = data2.activities
                activities.forEach(details2 => {
                    if(details2.type.toLowerCase() === 'report') {
                        document.querySelector('.act').innerHTML +=`
                        <div class="activity-flex patient-flex">
                        <div><img src="img/green report.svg"></div>
                        <div>${details2.title}</div>
                        </div>
                        `
                    }  else if (details2.type.toLowerCase() === 'interview') {
                        document.querySelector('.act').innerHTML +=`
                            <div class="activity-flex patient-flex">
                            <div><img src="img/schedule i.svg"></div>
                            <div>${details2.title}</div>
                            </div>
                            `
                    }
    
                })
        })


        