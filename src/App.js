import './App.css';

function App() {
  const handleTrackerClick = (e) => {
    // document.querySelector('.track-btn').addEventListener('click', (e) => {
      window.location.hash = "#tracker";
      e.preventDefault();
      document.getElementById('tracker').scrollIntoView({
          behavior: 'smooth'
      });
    // })
  }

  return (
    <div>
      <div className="banner-holder">
        <div className="banner">
          <div className="banner-text">
            <h1 className="">Lenny Goes Paddling</h1>  
            <p>Recently I have hurt many of the people closest to me and wrecked a lot of relationships. In the hope of regaining some semblance of peace and self understanding I have decided to kayak around the coast of the UK. Initially I was planning on doing this quietly and by myself, but then I thought that if I was going to do something so massive it would be a shame if something good didn’t come out of it for others, so I decided to start this go fund me page. Watching the recent events in Afghanistan is something that I think has impressed on everyone the scale of the humanitarian crisis unfolding there. It is my hope to raise as much money as possible to be donated to UNICEF’s Afghanistan emergency fund. To do this I will be attempting to kayak around as much of the UK coastline as possible over the next 70 days. I will be travelling solo, camping wild and trying to pick up as much plastic as I can along the way too. I am hoping to raise about £5 mile, so any donations would be greatly appreciated. I may not be worthy of your support, but the cause certainly is, so please pledge anything you are able to.</p>
            <div className="actions-holder">
              <a href="https://www.gofundme.com/f/lennygoespaddling/donate?member=13433973" className="donate-btn">Donate Now</a>
              <div className="track-btn" onClick={handleTrackerClick}>Track Me</div>
            </div>
          </div>
          <img src="https://i.imgur.com/Pprjl7r.jpg" alt="Lenny Kayaking" className="banner-img" />
        </div>
      </div>
      <iframe src="https://share.garmin.com/lennygoespaddling" frameBorder="0" className="iframe" id="tracker"></iframe>
    </div> 
  );
}

export default App;
