import React from 'react'

//Bootstrap
import Container from 'react-bootstrap/Container'

function Info() {
    return (
        <div className='covid'>
            <h3>COVID-19</h3>
            <Container>
                <h5>
                    Coronavirus disease 2019 (COVID-19) (also known as Wuhan Novel Coronavirus) is an infectious disease caused by severe acute respiratory
                    syndrome coronavirus 2 (SARS-CoV-2), a virus closely related to the SARS virus. The disease first emerged in Wuhan,
                    China and is the cause of the 2019–20 coronavirus outbreak. Those affected are likely to develop a fever and dry cough.
                    Fatigue and shortness of breath are also common indicators. Sputum production, headache, muscle pain, and sore throat are
                    less common symptoms.
                </h5>
                <h3>
                    Wash your hands!
                </h3>
                <hr/>
            </Container>
        </div>
    )
}

export default Info
