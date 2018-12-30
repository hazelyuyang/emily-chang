import React from "react"
import Layout from "../components/layout";
import "../components/index.css"
import ResumeList from '../components/resumeList'
import Works from "../components/works";


export default () => (
    <Layout>
        <div className="header-content">
            <div className="header-title">
                <div className="title"><img src={require('../images/emily-chang.svg')} alt="Emily Chang" /></div>
                <h4 className="location">張君涵，影視編劇，現居於台北。</h4>
            </div> 
        </div>
        <div className="about">
            <h3><span className="underline">關於張君涵</span></h3>
            <p>曾受台灣大學戲劇系、台北藝術大學電影碩士班編劇組紮實教育訓練，並於美國紐約電影學院 New York Film Academy 與加州大學洛杉磯分校 UCLA 完成全英文好萊塢專業電影劇本寫作課程，熟知華語文化脈絡與好萊塢影視創作法則，精通中英文寫作，深具跨國合作編劇能力。</p>
            <p>師承華語電影界資深製片人焦雄屏、台灣電影導演易智言， 並與兩岸知名影視導演陳慧翎、鄭芬芬、李祐寧等人深度合作。</p>
            <p>歷年在兩岸陸續推出影視與舞台劇作品，諸如 2016 年樂視網 TFBoys 高人氣網劇<a href="https://zh.wikipedia.org/zh-tw/%E8%B6%85%E5%B0%91%E5%B9%B4%E5%AF%86%E7%A0%81">【超少年密碼】</a>、2014 年台灣獲文化部輔導金長片<a href="https://www.youtube.com/watch?v=1ue_KSFP9vA">【時下暴力】</a>、以及 2015-2017 年台灣小劇場界飽受好評舞台劇【神秘客之我要上班】系列作。</p>
            <div className="resume">
                <h4>經歷</h4>
                <ResumeList
                    year="2016"
                    drama="樂視網 TFBoys 主演網劇【超少年密碼】"
                    jobTitle="編劇"
                />
                <ResumeList
                    year="2015"
                    drama="民視星座愛情系列【雙魚女】"
                    jobTitle="編劇"
                />
                <ResumeList
                    year="2014"
                    drama="壹玖八七工作室【時下暴力】"
                    jobTitle="編劇"
                />
                <ResumeList
                    year="2013"
                    drama="崗華影視傳播有限公司【只要一分鐘】"
                    jobTitle="助理導演"
                />
                <ResumeList
                    year="2012"
                    drama="上海辛迪加影視有限公司【愛情自有天意】"
                    jobTitle="現場副導"
                />
                <ResumeList
                    year="2012"
                    drama="台灣文建會 101 年敘事短片補助【最美的一天】"
                    jobTitle="編劇"
                />
                <ResumeList
                    year="2011"
                    drama="八大娛樂 K 台【為愛固執】"
                    jobTitle="編劇"
                />
                <ResumeList
                    year="2010"
                    drama="美亞電影製作有限公司【麵引子】"
                    jobTitle="助理編劇"
                />
            </div>
            <div className="awards">
                <h4>得獎作品</h4>
                <ResumeList 
                    year="2017"
                    drama="英文短片劇本【Name Change】"
                    jobTitle="入選美國洛杉磯 ScreenCraft 短片四分之一強賽 (Quarter-finalist)"
                />
                <ResumeList 
                    year="2017"
                    drama="英文長片劇本【Good Name】"
                    jobTitle="入選洛杉磯 CineStory Foundation 四分之一強賽 (Quarter-finalist)"
                />
                <ResumeList 
                    year="2010"
                    drama="舞台劇本【七十個七次】"
                    jobTitle="入圍台灣文學獎金典劇本獎"
                />
            </div>
            <div className="dramas">
                <div className="dramaList">
                    <h4>劇場經歷</h4>
                    <ResumeList 
                        year="2017"
                        drama="戲途會社【神秘客之我要上班——社・工】"
                        jobTitle="編劇"
                    />
                    <ResumeList 
                        year="2016"
                        drama="戲途會社【神秘客之我要上班——秘・書】"
                        jobTitle="編劇"
                    />
                    <ResumeList 
                        year="2015"
                        drama="戲途會社【神秘客之我要上班・科技業】"
                        jobTitle="編劇"
                    />
                    <ResumeList 
                        year="2015"
                        drama="戲途會社【神秘客之我要上班・演藝圈】"
                        jobTitle="導演暨編劇"
                    />
                    <ResumeList 
                        year="2014"
                        drama="働故事劇團【歌篾】"
                        jobTitle="導演暨劇本改編"
                    />
                    <ResumeList 
                        year="2011"
                        drama="果陀劇團【最後14堂星期二的課】"
                        jobTitle="助理導演"
                    />
                </div>
                <div className="dramaImage">
                    <img src={require('../images/drama.png')} />
                </div>
            </div>
            <div className="works">
                <h3><span className="underline">作品</span></h3>
                <div className="worksList">
                    <Works 
                        image={require('../images/finding-soul.png')}
                        text="超少年密碼"
                    />
                    <Works 
                        image={require('../images/conspracy.jpg')}
                        text="時下暴力"
                    />
                    <Works 
                        image={require('../images/secrect-person.jpg')}
                        text="神秘客我想工作"
                    />
                </div>
            </div>
        </div>
    </Layout> 
  )
