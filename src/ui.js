import React from 'react'
import ReactDOM from 'react-dom'

export const App = () => {
  return (
    <div className="container">
      <h1 className="my3">React Parcel Boilerplate!</h1>
      <div className="grid grid-2column grid-sm-gap mt5">

        <div>
          <h3 className="mb4">Buttons</h3>
          <div className="btn btn-primary m1">Primary Button</div> :: btn btn-primary<br />
          <div className="btn btn-success m1">Success Button</div> :: btn btn-success<br />
          <div className="btn btn-warning m1">Warning Button</div> :: btn btn-warning<br />
          <div className="btn btn-danger m1">Danger Button</div> :: btn btn-danger<br />
          <div className="btn btn-info m1">Info Button</div> :: btn btn-info<br /><br /><br />
          <div className="btn btn-primary-outline m1">Primary Button</div> :: btn btn-primary-outline<br />
          <div className="btn btn-success-outline m1">Success Button</div> :: btn btn-success-outline<br />
          <div className="btn btn-warning-outline m1">Warning Button</div> :: btn btn-warning-outline<br />
          <div className="btn btn-danger-outline m1">Danger Button</div> :: btn btn-danger-outline<br />
          <div className="btn btn-info-outline m1">Info Button</div> :: btn btn-info-outline<br /><br /><br />
        </div>

        <div>
          <h3 className="mb4">Margins and Paddings</h3>
          m_ :: Margin on ALL sides (1-6)<br />
          mx_ :: Margin Left and Right<br />
          my_ :: Margin Top and Bottom<br />
          mt_ :: Margin Top<br />
          mb_ :: Margin Bottom<br />
          ml_ :: Margin Left<br />
          mr_ :: Margin Right<br /><br />

          p_ :: Padding on ALL sides (1-6)<br />
          px_ :: Padding Left and Right<br />
          py_ :: Padding Top and Bottom<br />
          pt_ :: Padding Top<br />
          pb_ :: Padding Bottom<br />
          pl_ :: Padding Left<br />
          pr_ :: Padding Right<br /><br />
        </div>

        <div>
          <h3 className="mb4">Grid Containers</h3>
          &lt;div class="grid"&gt; :: start of a grid<br />
          &lt;div class="grid grid-2column"&gt; :: 2-column grid<br />
          &lt;div class="grid grid-3column"&gt; :: 3-column grid<br />
          &lt;div class="grid grid-4column"&gt; :: 4-column grid<br />
          &lt;div class="grid grid-sm-gap"&gt; :: small gap<br />
          &lt;div class="grid grid-md-gap"&gt; :: medium gap<br />
          <br /><br /><br />
        </div>

        <div>
          <h3 className="mb4">Loader</h3>
          &lt;div class="loader"&gt; :: Load Spinner
          <div className="loader" />
        </div>

        <div>
          <h3 className="mb4">Icon Fonts</h3>
          Icons are created and provided by ICOMOON<br /><br />
          <span className="icon-menu" /> :: &lt;span class="icon-menu" /&gt;<br />
          <span className="icon-equalizer2" /> :: &lt;span class="icon-equalizer2" /&gt;<br />
          <span className="icon-instagram" /> :: &lt;span class="icon-instagram" /&gt;<br />
          <span className="icon-play" /> :: &lt;span class="icon-play" /&gt;<br />
          <span className="icon-equalizer2" /> :: &lt;span class="icon-equalizer2" /&gt;<br />
          <span className="icon-clock-o" /> :: &lt;span class="icon-clock-o" /&gt;<br />
          <span className="icon-youtube" /> :: &lt;span class="icon-youtube" /&gt;<br />
          <br /><br /><br />
        </div>

        <div>
          <h3 className="mb4">Form Elements</h3>
          <form>
            <label htmlFor="formname">Name</label>
            <input type="text" id="formname" name="formname" />
            <label htmlFor="music">What Music Do You Like?</label>
            <select id="music" name="music">
              <option>Alternative</option>
              <option>Christian</option>
              <option>Jazz</option>
              <option>Rock</option>
            </select>
            <label htmlFor="formcomments">Comments</label>
            <textarea name="formcomments" id="formcomments" rows={5} />
            <button className="btn btn-primary">Submit</button>
          </form>
        </div>

        <div>
          <h3 className="mb4">Tags</h3>
          <div className="tag tag-primary"><a href="#">Tag 1</a></div>
          <div className="tag tag-success"><a href="#">Tag 2</a></div>
          <div className="tag tag-warning"><a href="#">Tag 3</a></div>
          <div className="tag tag-danger"><a href="#">Tag 4</a></div>
          <div className="tag tag-info"><a href="#">Tag 5</a></div>
        </div>

      </div>  {/* 2columns */}


      <h3 className="mt5 mb4">Cards</h3>
      <p>Inspired By: https://codepen.io/imjuangarcia/pen/pGgmbe</p>
      <div className="grid grid-3column grid-md-gap mt5">
        <div>
          <div className="card">
            <div className="cardimage">
              <img src="https://images.unsplash.com/photo-1471421298428-1513ab720a8e" />
              <div className="titleblock"><div className="cardtitle">Billions upon billions</div></div>
            </div>
            <div className="cardcontent">
              <div className="cardtext mt1 mb4">Made in the interiors of collapsing stars star stuff harvesting star light venture billions upon billions Drake Equation brain is the seed of intelligence?</div>
              <div className="btn btn-small btn-success uppercase">View Website</div>
            </div>
          </div>
        </div>
        <div>
        <div className="card">
            <div className="cardimage">
              <img src="https://images.unsplash.com/photo-1513309914637-65c20a5962e1" />
              <div className="titleblock"><div className="cardtitle">Drake Equation</div></div>
            </div>
            <div className="cardcontent">
              <div className="cardtext mt1 mb4">Another world citizens of distant epochs from which we spring descended from astronomers Orion's sword shores of the cosmic ocean.</div>
              <div className="btn btn-small btn-success uppercase">View Website</div>
            </div>
          </div>
        </div>
        <div>
        <div className="card">
          <div className="cardimage">
            <img src="https://images.unsplash.com/photo-1535359056830-d4badde79747" />
            <div className="titleblock"><div className="cardtitle">Vast cosmic arena</div></div>
          </div>
          <div className="cardcontent">
            <div className="cardtext mt1 mb4">Galaxies the ash of stellar alchemy prime number science inconspicuous motes of rock and gas brain is the seed of intelligence.</div>
            <div className="btn btn-small btn-success uppercase">View Website</div>
          </div>
        </div>
      </div>
    </div>

    <h3 className="mt5 mb4">Image Grid</h3>
    <p>Inspired by: https://codepen.io/imjuangarcia/pen/bzpYyj?editors=0100</p>
    <div className="imagegrid mt5">
      <div className="imagegrid_img"><img src="https://picsum.photos/200/300" /></div>
      <div className="imagegrid_img"><img src="https://picsum.photos/200/301" /></div>
      <div className="imagegrid_img"><img src="https://picsum.photos/200/302" /></div>
      <div className="imagegrid_img"><img src="https://picsum.photos/200/303" /></div>
      <div className="imagegrid_img"><img src="https://picsum.photos/200/304" /></div>
      <div className="imagegrid_img"><img src="https://picsum.photos/200/305" /></div>
      <div className="imagegrid_img"><img src="https://picsum.photos/200/306" /></div>
      <div className="imagegrid_img"><img src="https://picsum.photos/200/307" /></div>
      <div className="imagegrid_img"><img src="https://picsum.photos/200/308" /></div>
      <div className="imagegrid_img"><img src="https://picsum.photos/200/309" /></div>
      <div className="imagegrid_img"><img src="https://picsum.photos/200/310" /></div>
    </div>

    </div>

)
}

ReactDOM.render(<App />, document.querySelector("#root"))