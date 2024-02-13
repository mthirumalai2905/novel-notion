import React from 'react';
import './App.css';

const App = () => {
   const [isDesktop, setIsDesktop] = useState(false);

  // Function to handle screen size changes
  const handleScreenSize = () => {
    if (window.innerWidth >= 768) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
  };

  // Add event listener for window resize
  useEffect(() => {
    window.addEventListener('resize', handleScreenSize);
    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener('resize', handleScreenSize);
    };
  }, []);

  // CSS class name to conditionally apply based on screen size
  const containerClassName = isDesktop ? 'container desktop-layout' : 'container';

  return (
     <div className={containerClassName}>
    <div className='container'>
      <div className='banner'><img src='https://i.pinimg.com/originals/b8/28/f3/b828f31175c1818c3b34d59b9f433501.gif'/></div>
      <div className='content'>
        <h1>My Book List</h1>
        <div className='book-section'>
          <div className='book'>
          <div className='book-left'>
            <p>Can't hurt me</p>
            <p className='desc'>In "Can't Hurt Me," David Goggins shares his remarkable journey of overcoming immense challenges to become a world-renowned endurance athlete and motivational speaker.</p>
            <pre>https://www.amazon.com/Cant-Hurt-Me-Master-Your/dp/1544512279</pre>
            </div>
            <div className='book-right'><img src='https://m.media-amazon.com/images/I/61pDNU9qEGL._SY466_.jpg' /></div>
          </div>
          <div className='book'>
          <div className='book-left'>
            <p>The Subtle Art of Not Giving a Fuck</p>
            <p className='desc'>"The Subtle Art of Not Giving a F*ck" by Mark Manson offers straightforward advice on living a more meaningful life by embracing discomfort and prioritizing what truly matters.</p>
            <pre>https://shorturl.at/hwAW3</pre>
            </div>
            <div className='book-right'><img src='https://m.media-amazon.com/images/I/71kzkcMcAQL._SY466_.jpg' /></div>
          </div>
          <div className='book'>
          <div className='book-left'>
            <p>Make Time</p>
            <p className='desc'>In "Can't Hurt Me," David Goggins shares his remarkable journey of overcoming immense challenges to become a world-renowned endurance athlete and motivational speaker.</p>
            <pre>https://www.amazon.com/Cant-Hurt-Me-Master-Your/dp/1544512279</pre>
            </div>
            <div className='book-right'><img src='https://m.media-amazon.com/images/I/41kMPOmn2aL._SY445_SX342_.jpg' /></div>
          </div>
          <div className='book'>
          <div className='book-left'>
            <p>The Alchemist</p>
            <p className='desc'>In "Can't Hurt Me," David Goggins shares his remarkable journey of overcoming immense challenges to become a world-renowned endurance athlete and motivational speaker.</p>
            <pre>https://www.amazon.com/Cant-Hurt-Me-Master-Your/dp/1544512279</pre>
            </div>
            <div className='book-right'><img src='https://m.media-amazon.com/images/I/51zKRc2C5OL._SY445_SX342_.jpg' /></div>
          </div>
          <div className='book'>
          <div className='book-left'>
            <p>The Richest Man in the Babylon</p>
            <p className='desc'>In "Can't Hurt Me," David Goggins shares his remarkable journey of overcoming immense challenges to become a world-renowned endurance athlete and motivational speaker.</p>
            <pre>https://www.amazon.com/Cant-Hurt-Me-Master-Your/dp/1544512279</pre>
            </div>
            <div className='book-right'><img src='https://m.media-amazon.com/images/I/41n8gEp9FnL._SY445_SX342_.jpg' /></div>
          </div>
          <div className='book'>
          <div className='book-left'>
            <p>How to win friends and influence people</p>
            <p className='desc'>In "Can't Hurt Me," David Goggins shares his remarkable journey of overcoming immense challenges to become a world-renowned endurance athlete and motivational speaker.</p>
            <pre>https://www.amazon.com/Cant-Hurt-Me-Master-Your/dp/1544512279</pre>
            </div>
            <div className='book-right'><img src='https://m.media-amazon.com/images/I/41OksZQYt+L._SY445_SX342_.jpg' /></div>
          </div>
          <div className='book'>
          <div className='book-left'>
            <p>Do it today</p>
            <p className='desc'>In "Can't Hurt Me," David Goggins shares his remarkable journey of overcoming immense challenges to become a world-renowned endurance athlete and motivational speaker.</p>
            <pre>https://www.amazon.com/Cant-Hurt-Me-Master-Your/dp/1544512279</pre>
            </div>
            <div className='book-right'><img src='https://m.media-amazon.com/images/I/61ePdebDa7L._SY466_.jpg' /></div>
          </div>
          <div className='book'>
          <div className='book-left'>
            <p>Atomic Habits</p>
            <p className='desc'>In "Can't Hurt Me," David Goggins shares his remarkable journey of overcoming immense challenges to become a world-renowned endurance athlete and motivational speaker.</p>
            <pre>https://www.amazon.com/Cant-Hurt-Me-Master-Your/dp/1544512279</pre>
            </div>
            <div className='book-right'><img src='https://m.media-amazon.com/images/I/513Y5o-DYtL.jpg' /></div>
          </div>
          <div className='book'>
          <div className='book-left'>
            <p>Ikigai</p>
            <p className='desc'>In "Can't Hurt Me," David Goggins shares his remarkable journey of overcoming immense challenges to become a world-renowned endurance athlete and motivational speaker.</p>
            <pre>https://www.amazon.com/Cant-Hurt-Me-Master-Your/dp/1544512279</pre>
            </div>
            <div className='book-right'><img src='https://m.media-amazon.com/images/I/51PGzOuqgAL.jpg' /></div>
          </div>
          <div className='book'>
          <div className='book-left'>
            <p>48 laws of power</p>
            <p className='desc'>In "Can't Hurt Me," David Goggins shares his remarkable journey of overcoming immense challenges to become a world-renowned endurance athlete and motivational speaker.</p>
            <pre>https://www.amazon.com/Cant-Hurt-Me-Master-Your/dp/1544512279</pre>
            </div>
            <div className='book-right'><img src='https://m.media-amazon.com/images/I/41PfHefFq1L.jpg' /></div>
          </div>
          <div className='book'>
          <div className='book-left'>
            <p>The Art Of Learning</p>
            <p className='desc'>In "Can't Hurt Me," David Goggins shares his remarkable journey of overcoming immense challenges to become a world-renowned endurance athlete and motivational speaker.</p>
            <pre>https://www.amazon.com/Cant-Hurt-Me-Master-Your/dp/1544512279</pre>
            </div>
            <div className='book-right'><img src='https://m.media-amazon.com/images/I/51VoXW+dIrL.jpg' /></div>
          </div>
          <div className='book'>
          <div className='book-left'>
            <p>The Art of Persuasion</p>
            <p className='desc'>In "Can't Hurt Me," David Goggins shares his remarkable journey of overcoming immense challenges to become a world-renowned endurance athlete and motivational speaker.</p>
            <pre>https://www.amazon.com/Cant-Hurt-Me-Master-Your/dp/1544512279</pre>
            </div>
            <div className='book-right'><img src='https://m.media-amazon.com/images/I/41D2YUSgjCS._SY445_SX342_.jpg' /></div>
          </div>
          <div className='book'>
          <div className='book-left'>
            <p>Can't hurt me</p>
            <p className='desc'>In "Can't Hurt Me," David Goggins shares his remarkable journey of overcoming immense challenges to become a world-renowned endurance athlete and motivational speaker.</p>
            <pre>https://www.amazon.com/Cant-Hurt-Me-Master-Your/dp/1544512279</pre>
            </div>
            <div className='book-right'><img src='https://m.media-amazon.com/images/I/61pDNU9qEGL._SY466_.jpg' /></div>
          </div>
          <div className='book'>
          <div className='book-left'>
            <p>Can't hurt me</p>
            <p className='desc'>In "Can't Hurt Me," David Goggins shares his remarkable journey of overcoming immense challenges to become a world-renowned endurance athlete and motivational speaker.</p>
            <pre>https://www.amazon.com/Cant-Hurt-Me-Master-Your/dp/1544512279</pre>
            </div>
            <div className='book-right'><img src='https://m.media-amazon.com/images/I/61pDNU9qEGL._SY466_.jpg' /></div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
