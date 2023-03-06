import React, { useState } from 'react';
import HoroscopeApi from '../lib/HoroscopeApi';

const Horoscope = () => {
  const [sign, setSign] = useState('');
  const [day, setDay] = useState('');
  const [horoscopeData, setHoroscopeData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (sign && day) {
      const data = await HoroscopeApi(sign, day);
      setHoroscopeData(data);
    }
  };

  return (
    <div className="p-9 flex justify-center">
      <div className="w-full max-w-lg">
        <form onSubmit={handleSubmit} className="shadow-md bg-gradient-to-r from-teal-400 to-blue-500 rounded-md px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-white text-lg font-bold mb-2" htmlFor="sign">
              Sign:
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-500 text-white text-lg font-semibold leading-tight focus:outline-none focus:shadow-outline"
              id="sign"
              value={sign}
              onChange={(e) => setSign(e.target.value)}
            >
              <option value="">-- Select a sign --</option>
              <option value="aries">Aries</option>
              <option value="taurus">Taurus</option>
              <option value="gemini">Gemini</option>
              <option value="cancer">Cancer</option>
              <option value="leo">Leo</option>
              <option value="virgo">Virgo</option>
              <option value="libra">Libra</option>
              <option value="scorpio">Scorpio</option>
              <option value="sagittarius">Sagittarius</option>
              <option value="capricorn">Capricorn</option>
              <option value="aquarius">Aquarius</option>
              <option value="pisces">Pisces</option>
            </select>
          </div>
          <div className="mb-6">
            <label className="block text-white text-lg font-bold mb-2" htmlFor="day">
              Day:
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-500 text-white text-lg font-semibold border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                id="day"
                value={day}
                onChange={(e) => setDay(e.target.value)}
              >
                <option value="">Select a day</option>
                <option value="yesterday">Yesterday</option>
                <option value="today">Today</option>
                <option value="tomorrow">Tomorrow</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 12l-6-6h12z"/></svg>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-extrabold px-4 py-2 rounded"
              type="submit"
            >
              Get Horoscope
            </button>
          </div>
        </form>
        {horoscopeData && (
          <div className="flex justify-center bg-gradient-to-r from-teal-400 to-blue-500 rounded-md">
            <div className="max-w-sm rounded overflow-hidden">
              <img className="w-full p-5" src={`../zodiacSigns/${sign.toLowerCase()}.png`} alt="Sunset in the mountains" />
              <div className="px-6 py-4">
                <div className="font-bold text-white text-xl mb-2">{horoscopeData.date_range}</div>
                <p className="text-white text-3xl">{horoscopeData.description}</p>
                <p className="text-white text-3xl">Lucky number: {horoscopeData.lucky_number}</p>
                <p className="text-white text-3xl">Lucky time: {horoscopeData.lucky_time}</p>
                <p className="text-white text-3xl">Compatibility: {horoscopeData.compatibility}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Horoscope;
