import React, { useState, useEffect } from 'react'
import { Button, Row } from 'react-bootstrap'
import axios from '../api/axios'



function Hobbies( {updateState} ) {

    const [hobbies, setHobbies] = useState([]);
    const GET_HOBBIES_URL = '/api/hobbies/get'
    const fetchData = async () => {
        try {
            const response = await axios.get(GET_HOBBIES_URL)
            const data = response.data
            setHobbies(data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, []);

    const selectHobby = (hobby) => {
        updateState(hobby)
    }

    return (
        <div>
            <h2>Hobbies</h2>
            {hobbies.map((hobby, index) => (
                <Row key={index}>
                    <Button 
                        className='mb-1' 
                        variant='dark' 
                        onClick={() => selectHobby(hobby)}>
                        {hobby.title}
                    </Button>
                </Row>
            ))}
            
        </div>
    )
}

export default Hobbies