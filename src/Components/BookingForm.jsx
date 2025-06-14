import React, {useState} from 'react';

const BookingForm = (props) => {
    const[date, setDate] = useState("");
    const[time, setTime] = useState("");
    const[guests, setGuests] = useState("");
    const[occasion, setOccassion] = useState("");

    const handleSubmit= (e) => {
        e.preventDefault();
        props.submitForm(e);
    }

    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e)
    }

    return (
        <header>
            <section>
                <form>
                    <fieldset>
                        <div>
                            <label htmlFor='book-date'>Choose Date:</label>
                            <input id='book-date' value={date} onChange={(e) => {handleChange(e.target.value)}} type='date' required />
                        </div>

                        <div>
                            <label htmlFor='book-time'>Choose Time:</label>
                            <select id='book-time' required value={time} onChange={(e) => setTime(e.target.value)} >
                                <option value="">
                                    Select a Time
                                </option>
                                {props.availableTimes.availableTimes.map((availableTimes) => {
                                    return <option key={availableTimes}>{availableTimes}</option>
                                })}
                            </select>
                        </div>

                        <div>
                            <label htmlFor='book-guests'>Number of Guests:</label>
                            <input id='book-guests' min={1} max={10} type='number' placeholder='0' required value={guests}
                            onChange={e => setGuests(e.target.value)}/>
                        </div>

                        <div>
                            <label htmlFor='book-occassion'>Choose Occassion:</label>
                            <select id='book-occassion' key={book-occassion} value={occasion} onChange={e => setOccassion(e.target.value)} required>
                                <option value="">Select an option</option>
                                <option>Birthday</option>
                                <option>Anniversary</option>
                            </select>
                        </div>

                        <div className="btnReceive">
                            <input
                            aria-label="On Click"
                            type="submit"
                            value={"Make Your Reservation"}
                            />
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    )
}

export default BookingForm;