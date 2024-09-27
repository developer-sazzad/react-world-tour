import { useState } from 'react';
import './Country.css'

const Country = ({ country }) => {
    const { name, flags, area, cca3} = country;
    console.log(country);

    const [visited, setVisited] = useState(false);

    const hadleVisited = () => {
        setVisited(!visited);
        
    }
    return (
        <>
            <div className="country">
                <h2>{name?.common}</h2>
                <img className='country-img' src={flags?.png} alt="" />
                <p>Official Name : {name.official}</p>
                <p>Area : {area}</p>
                <p>Code : {cca3}</p>
                <button className='visited-btn' onClick={hadleVisited}>{visited ? 'Visited' : 'Going'}</button>
                {visited ? 'I have Visited.' : 'I Want to Visit.'}
            </div>
        </>
    );
};

export default Country;