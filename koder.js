
let koder = {
  isInterview: false,
  isAdvancePayment: false,
  isAttendance: false,
}

// promesas
function interview (koder){
  return new Promise((resolve, reject) => {
    koder.isInterview = true
    if(!koder.isInterview){
      return reject(new Error('No se entrevisto'))
    }
    return resolve (koder)
  })
}

function advancePayment (koder){
  return new Promise((resolve, reject) => {
    koder.isAdvancePayment = true
    if(!koder.isAdvancePayment){
      return reject(new Error('No pudo pagar'))
    }
    return resolve (koder)
  })
}
                     
function attendance (koder){
  return new Promise((resolve, reject) => {
    koder.isAttendance = true
    if(!koder.isAttendance){
      return reject(new Error('No asistio'))
    }
    return resolve (koder)
  })
}

// .then y .catch
// interview(koder)
// .then(koderIsInterviewed => {
//   advancePayment(koderIsInterviewed)
//     .then(koderIsAdvancePayment => {
//       attendance(koderIsAdvancePayment)
//         .then(koderIsAttendance => {
//           console.log('koder: ', koderIsAttendance)
//         })
//         .catch(error => {
//           console.error('ERROR ENTREVISTA: ', error)
//         })
//     })
//     .catch(error => {
//       console.error('ERROR PAGO: ', error)
//     })
// })
// .catch(error => {
//   console.error('ERROR CLASE: ', error)
// })

// async await                   
async function main () {
  const interviewKoder = await interview (koder)
  const advancePayKoder = await advancePayment (interviewKoder)
  const attendanceKoder = await attendance (advancePayKoder)
  return attendanceKoder
}       

main()
.then((newKoder) => { 
  console.log('ASYNC AWAIT, New Koder: ', newKoder)
})
.catch(error => {
  console.log('ERROR: ', error)
})
