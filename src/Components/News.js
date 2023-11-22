// MyclassNameComponent.js
import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
  articles = [
    {
        "source": {
            "id": "bbc-sport",
            "name": "BBC Sport"
        },
        "author": null,
        "title": "'Cricket World Cup should be enjoyed, not endured'",
        "description": "The World Cup ended how it began, with a sense of emptiness in Ahmedabad, and now the challenge is to breathe life into the tournament for 2027, says Stephan Shemilt.",
        "url": "http://www.bbc.co.uk/sport/cricket/67470006",
        "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/133CC/production/_131769787_gettyimages-1803340989.jpg",
        "publishedAt": "2023-11-20T10:37:24.0380436Z",
        "content": "Ultimately, the World Cup ended how it began, with a sense of emptiness inside the biggest cricket stadium on the planet.\r\nOn 5 October it was because New Zealand whipping England in the opening matc… [+6467 chars]"
    },
    {
        "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
        },
        "author": null,
        "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
        "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
        "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
        "publishedAt": "2020-04-27T11:41:47Z",
        "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
        "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
        },
        "author": null,
        "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
        "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
        "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
        "publishedAt": "2020-03-30T15:26:05Z",
        "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }
]
    constructor(){
      super();
      console.log("Hello I am a constructor")
      this.state = {
        articles: this.articles,
        loading: false
      }
    }

    async componentDidMount(){
      let url = "https://newsapi.org/v2/everything?q=tesla&from=2023-10-22&sortBy=publishedAt&apiKey=d124f019ecf74aa2a1047aed51d634bc";
      let data = await fetch(url);
      let parseData = await data.json();
      console.log(data);
      this.setState({articles: parseData.articles})
    }

    render(){
      return (
        <div className="container my-4">
          <h2>TrendTracker - Top Headlines</h2>
          <div className="row">
          {this.state.articles.map((element)=>{
              return <div className="col-md-4" key={element.url}>
               <NewsItem title={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url}></NewsItem>
             </div>
          })}
          </div>
        </div>
      )
    }
}

export default News