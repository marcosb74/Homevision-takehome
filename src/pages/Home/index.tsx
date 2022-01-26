import React, { useState } from 'react';
import { InView } from 'react-intersection-observer';
import { Alert } from 'react-bootstrap';
import BeatLoader from 'react-spinners/BeatLoader';
import HouseList from '../../components/Houses';
import getHouses from '../../services/home.service';
import { House, Houses } from '../../types/house';
import { CustomAlert, CUSTOM_ALERT } from '../../types/alert';
import './styles.css';

function Home() {
  const [page, setPage] = useState<number>(1);
  const [houses, setHouses] = useState<Houses>([]);
  const [alert, setAlert] = useState<CustomAlert | undefined>();

  const fetchHouses = async () => {
    try {
      const response = await getHouses(page);
      if (response.data.ok && response.data.houses.length) {
        setHouses([...houses, ...response.data.houses]);
        setPage((page) => ++page);
      } else {
        setAlert(CUSTOM_ALERT.noHouses);
      }
    } catch (e) {
      setAlert({ ...CUSTOM_ALERT.timeout, onClick: retryFetchingHouses });
    }
  };

  const retryFetchingHouses = () => {
    setAlert(undefined);
    fetchHouses();
  };

  const onChangeInView = (entry: IntersectionObserverEntry) => {
    if (entry.isIntersecting) {
      fetchHouses();
    }
  };

  return (
    <>
      <div className="mt-5">
        {houses.length > 0 &&
          houses.map((house: House) => (
            <div key={house.id}>
              <HouseList {...house} />
            </div>
          ))}
      </div>
      {alert && (
        <Alert
          onClick={alert.onClick}
          variant={alert.variant}
          className={alert.className}
        >
          {alert.label}
        </Alert>
      )}
      {!alert /* ver esto */ && (
        <InView
          threshold={0.5}
          as="div"
          onChange={(inView, entry) => onChangeInView(entry)}
        >
          <BeatLoader size={30} />
        </InView>
      )}
    </>
  );
}

export default Home;
