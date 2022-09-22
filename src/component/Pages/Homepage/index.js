import './homepage.css';
import InputField from '../../atoms/InputField';
import Buttons from '../../atoms/Buttons';
import Layout from '../../Layout';
import { useState } from 'react';
import axios from 'axios';
import { URL_SHORTNER_URL } from '../../../apis/api';
import { PacmanLoader } from 'react-spinners';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const override = {
  display: 'block',
  margin: '0 auto',
};

const Homepage = () => {
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');
  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const urlLoginDetails = JSON.parse(localStorage.getItem('urlloginDetails'));
    if (urlLoginDetails) {
      try {
        const { data } = await axios.post(
          URL_SHORTNER_URL,
          { original_url: url },
          {
            headers: {
              Authorization: `Bearer ${urlLoginDetails.access_token}`,
            },
          }
        );
        setShortenedUrl(data.shorten_url);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    }
  };
  return (
    <div className="homepage">
      <div className="homepage__title">
        <h1>URL SHORTNER</h1>
      </div>
      <Layout>
        <div className="homepage__body">
          <p>Paste your URL to be shortened</p>
          <form className="url__shortner" onSubmit={handleSubmit}>
            <div className="form__data">
              <InputField
                type="text"
                placeholder="Paste your url link"
                value={url}
                handleChange={handleChange}
              />
              <Buttons btnText="Shorten Url" />
            </div>
          </form>
        </div>
      </Layout>
      {shortenedUrl ? (
        <Layout>
          <div className="shortened__url">
            <CopyToClipboard text="text" onCopy={() => alert('Copied')}>
              <span className="url_link"> {shortenedUrl}</span>
            </CopyToClipboard>
          </div>
        </Layout>
      ) : (
        <>
          <div className="sweet-loading">
            <PacmanLoader
              color="#1a8cd8"
              loading={loading}
              cssOverride={override}
              size={25}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Homepage;
