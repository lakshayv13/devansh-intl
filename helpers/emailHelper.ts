import emailjs from '@emailjs/browser';
  
export function sendFormDIDC(params: Record<string, unknown>) {
    emailjs
    .send('service_viphjqg', 'template_7emryyq', params, {
        publicKey: 'rCRRFbkEixMNmUw3Y',
    })
    .then(
        (response) => {
        console.log('SUCCESS!', response.status, response.text);
        },
        (err) => {
        console.log('FAILED...', err);
        },
    );
}

export function sendFormUser(params: Record<string, unknown>) {
    emailjs
    .send('service_viphjqg', 'template_fgwpuga', params, {
        publicKey: 'rCRRFbkEixMNmUw3Y',
    })
    .then(
        (response) => {
        console.log('SUCCESS!', response.status, response.text);
        },
        (err) => {
        console.log('FAILED...', err);
        },
    );
}