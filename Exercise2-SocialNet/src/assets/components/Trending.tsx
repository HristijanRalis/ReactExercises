import  { Component } from 'react'
import '..//styles/trending.css'; 



export default class Trending extends Component {
  render() {
    return (
      <div className="head">
        <div className='trendingPosts'>
            <h2>Trends for you</h2>
            <div className='trendingPost'>
                <div className="trends">
                    <span className='trendSpan'>Trending in Sport</span>
                    <span className='moreTrends'>&#8943;</span>
                </div>
                
                <h5>LA Lakers wins against the Suns</h5>
            </div>
            <div className='trendingPost'>
                   <div className="trends">
                    <span className='trendSpan'>Trending in World</span>
                    <span className='moreTrends'>&#8943;</span>
                </div>
                <h5>War in Ukraine</h5>


            </div>
            <div className='trendingPost'>
                   <div className="trends">
                    <span className='trendSpan'>Trending in Weather</span>
                    <span className='moreTrends'>&#8943;</span>
                </div>
                <h5>Sunny in Skopje</h5>


            </div>
            <div className='trendingPost'>
                  <div className="trends">
                    <span className='trendSpan'>Trending in Food</span>
                    <span className='moreTrends'>&#8943;</span>
                </div>
                <h5>10 Best Pizza Recipes</h5>


            </div>
        </div>
        </div>
    )
  }
}
