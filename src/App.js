import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import img from "./Capture.PNG"
import img1 from "./Capture1.PNG"
import img2 from "./Capture2.PNG"
import img3 from "./Capture3.PNG"
import img4 from "./Capture4.PNG"
import img5 from "./Capture5.PNG"
import img6 from "./Capture6.PNG"
import img7 from "./Capture7.PNG"
import img8 from "./Capture8.PNG"
import img9 from "./Capture9.PNG"
import img10 from "./Capture10.PNG"
import img11 from "./Capture11.PNG"
import img12 from "./Capture12.PNG"
import img13 from "./Capture13.PNG"
import games from "./games on fb.PNG"
import tag from "./fb2.PNG"
import ai from "./ai"
import contact from "./contact.webp"
// import img14 from "./Capture14.PNG"
import { useState } from 'react';
function App() {
  const [tab, setTab] = useState(0)
  const [array, setArray] = useState([
    { id: 0, image: img, active: true, description: " Instagram emerged as the overwhelmingly preferred platform (54.2%). This preference may stem from the platform's visual-centric nature, satisfying users' desire for aesthetically pleasing and easily digestible content.", insight: "The preference for Instagram aligns with psychological principles such as the visual bias in human cognition and the appeal of visually stimulating content." },
    { id: 1, image: img1, active: false, description: "The majority reported neutral satisfaction levels (41.7%), indicating a balanced sentiment. However, the presence of very satisfied (12.5%) and very dissatisfied (4.2%) participants suggests diverse emotional responses.", insight: "The varied satisfaction levels echo the psychological concept of the 'hedonic treadmill', where individuals' satisfaction tends to return to a baseline despite positive or negative experiences." },
    { id: 2, image: img2, active: false, description: "Ratings for user interface were generally positive, with the most common rating being 7 (25%). This suggests a generally favorable perception of the design and usability of preferred platforms.", insight: "Positive UI ratings align with cognitive psychology principles, where users tend to prefer interfaces that are intuitive, visually appealing, and easy to navigate." },
    { id: 3, image: img3, active: false, description: " A significant majority found navigation very easy (54.2%), indicating a preference for platforms with streamlined and user-friendly navigation.", insight: " Positive UI ratings align with cognitive psychology principles, where users tend to prefer interfaces that are intuitive, visually appealing, and easy to navigate." },
    { id: 4, image: img4, active: false, description: "Over half of the participants (54.2%) expressed satisfaction with customization options, reflecting a desire for individuality and control over their online experience.", insight: "The preference for easy navigation is consistent with cognitive fluency theories, emphasizing that users prefer platforms where interactions require minimal cognitive effort." },
    { id: 5, image: img5, active: false, description: "Participants showed varied preferences for features, with News Feed being the most valued (62.5%). This diversity indicates that users have different intrinsic and extrinsic motivations.", insight: " Feature preferences align with motivational psychology, suggesting that users are driven by a mix of personal interests, social connections, and information consumption." },
    { id: 6, image: img6, active: false, description: "", insight: "" },
    { id: 7, image: img7, active: false, description: "A large majority (83.3%) engage with different content types multiple times a day, reflecting a strong psychological connection and habituation to the platforms.", insight: " High engagement levels suggest the platforms play a significant role in users' daily routines, fulfilling psychological needs for information, social connection, and entertainment." },
    { id: 8, image: img8, active: false, description: "Responses indicated varied perceptions of notification frequency, with a notable percentage finding it somewhat frequent (37.5%). This suggests individual differences in attention tolerance.", insight: "Notification perceptions relate to attention psychology, with users displaying diverse levels of sensitivity to interruptions and information updates." },
    { id: 9, image: img9, active: false, description: "Confidence in platform security varied, with 33.3% expressing confidence. This diversity may reflect individual differences in trust and risk perception.", insight: "Security confidence is linked to trust psychology, where users' perceptions of platform security are influenced by their trust in technology and concerns about privacy." },
    { id: 10, image: img10, active: false, description: "A significant portion (54.2%) remained undecided about switching platforms. This indecision may reflect the psychological concept of decision-making inertia, where users hesitate to change established behaviors without clear benefits.", insight: "Undecided responses align with the psychological resistance to change and the need for compelling reasons to switch from familiar platforms." },
    { id: 11, image: img11, active: false, description: "", insight: "" },
    { id: 12, image: img12, active: false, description: "", insight: "" },
    { id: 13, image: img13, active: false, description: "", insight: "" },
    // { id: 14, image: img14, active: false },
  ])
  // const array = [
  //   { id: 1, image: img, active: true },
  //   { id: 1, image: img1, active: true },
  //   { id: 2, image: img2, active: false },
  //   { id: 3, image: img3, active: false },
  //   { id: 4, image: img4, active: false },
  //   { id: 5, image: img5, active: false },
  //   { id: 6, image: img6, active: false },
  // ]
  const handleNext = () => {
    console.log("handleNext")
    if (tab < 13) {
      let num = tab + 1
      let index = array.findIndex((el) => el.id == tab)
      let tempArr = [...array]
      tempArr[index].active = false
      tempArr[index + 1].active = true
      setArray(tempArr)
      setTab(num)
    }
  }
  const handlePrev = () => {
    console.log("handlePrev")
    if (tab > 0) {
      let num = tab - 1
      let index = array.findIndex((el) => el.id == tab)
      let tempArr = [...array]
      tempArr[index].active = false
      tempArr[index - 1].active = true
      setArray(tempArr)
      setTab(num)
    }
  }
  return (
    <div className="App bg-light">
      <nav className="navbar navbar-light bg-black  ">
        <span style={{ color: "white" }} className="navbar-brand mb-0 h1">Survey on "Preferred Social Media Application"</span>
      </nav>
      <h4 className='heading'>
        Survey Results:
      </h4>
      <div className='main container'>
        <div onClick={handlePrev} className='btn-left'><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
          <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
        </svg></div>
        {
          array.map((arr) => {
            if (arr.active == true) {
              return (<>
                <div style={arr.description == "" ? { justifyContent: "center" } : {}} className='crsl-main'>
                  {arr.description != "" && <div className='text-sec'>
                    <h6>Description:</h6>
                    {arr.description}
                    {/* Instagram emerged as the overwhelmingly preferred platform (54.2%). This preference may stem from
            the platform's visual-centric nature, satisfying users' desire for aesthetically pleasing and easily digestible content. */}
                    <br />
                    <br />
                    <h6>Psychological Insight:</h6>
                    {arr.insight}
                    {/* The preference for Instagram aligns with psychological principles such as the visual bias in
            human cognition and the appeal of visually stimulating content. */}
                  </div>}
                  {/* <div className='pic-sec'> */}
                  <img className='pic-sec' src={arr.image} alt='not' />
                  {/* </div> */}
                </div>
              </>)
            }
          })
        }


        <div onClick={handleNext} className='btn-rt'>
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
          </svg>
        </div>
      </div>
      <div>
        <h4 className='heading'>Implementations based on Survey</h4>
        <div className='sec-2'>
          <div className='left-sec'>
            Users express a preference for a gaming feature on Instagram, alike to what Facebook offers. This indicates a growing demand for interactive and entertainment-focused functionalities within the Instagram platform. The desire for gaming features underscores the importance users place on diversified and engaging content, aligning with the evolving landscape of social media preferences.
          </div>
          <img src={games} />
        </div>
        <div className='sec-2'>
          <div className='left-sec'>

            Instagram users are advocating for a feature that prompts individuals before being tagged in a post or story, similar to the functionality available on Facebook. This reflects a desire for increased control and consent over one's online presence, aligning with the evolving expectations around privacy and digital autonomy. The request underscores the importance users place on maintaining a level of discretion and choice regarding their online interactions, contributing to a more personalized and user-centric experience on the platform.          </div>
          <img src={tag} />
        </div>
        <div className='sec-2'>
          <div className='left-sec'>

            Both Facebook and Instagram users express a shared desire for Artificial Intelligence (AI) integration within their respective platforms. This common preference highlights the recognition among users of the potential benefits that AI can bring to enhance user experiences. The request for AI integration suggests an anticipation of more personalized and efficient interactions, aligning with the broader trend of users expecting advanced technological capabilities to enrich their digital engagements.          </div>
          <img src={ai} />
        </div>
        <div className='sec-2'>
          <div className='left-sec'>

            Users on both Facebook and Instagram express a shared desire to have the option to contact a human representative for issue resolution. This preference underscores the importance users place on personalized assistance and direct communication when facing challenges or seeking support on these platforms. The request aligns with fundamental human needs for connection and understanding, emphasizing the significance of human interactions in addressing user concerns and fostering a positive user experience.          </div>
          <img src={contact} />
        </div>
      </div>
    </div>
  );
}

export default App;
