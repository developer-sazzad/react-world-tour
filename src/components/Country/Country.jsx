import './Country.css'

const Country = ({ country }) => {
    const { name, flags, area} = country;
    console.log(country);
    return (
        <>
            <div className="country">
                <h2>{name?.common}</h2>
                <img className='country-img' src={flags?.png} alt="" />
                <p>Official Name : {name.official}</p>
                <p>Area : {area}</p>
            </div>
        </>
    );
};

export default Country;