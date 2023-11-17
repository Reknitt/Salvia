import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Hobbies from '../components/Hobbies'

/*
1. изменить размер кнопок
2. добавить правую часть экрана как на шаблоне
3. 
*/
function HomeScreen() {

    const [selectedHobby, setSelectedHobby] = useState(null);

    const updateState = (newHobby) => {
        console.log(newHobby)
        setSelectedHobby(newHobby);
    }

    return (
        <Container>
            <Row>
                <Col md={2}>
                    {/* добавить компонент который выводил бы список хобби */}
                    <Hobbies updateState={updateState}/>
                </Col>


                <Col>
                    { /* при нажатии на хобби этот экран должен показывать подробности о ней */ }
                    {selectedHobby && (
                        <>
                            <img 
                                src={"/images/" + selectedHobby.image} 
                                alt={selectedHobby.title}
                                width={600}
                                height={300}
                                className='mt-1'
                            />
                            <h2>{selectedHobby.title}</h2>
                            <p>{selectedHobby.description}</p>
                        </>
                    )}
                    
                </Col>
            </Row>
        </Container>
    )
}

export default HomeScreen