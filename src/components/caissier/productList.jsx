import React, { useState } from 'react';
import "./productList.css";


const  ProductList  = () => {
  const [activeTab, setActiveTab] = useState('breakfast');

  const changeTab = (tabId) => {
    const tabs = document.getElementsByClassName('tab-pane');
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('show', 'active');
    }
    document.getElementById(tabId).classList.add('show', 'active');
	console.log(tabId);
    setActiveTab(tabId);
  };

  return (
    <section id="our_menu">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="page_title text-center mb-4 ">
              <h1>our menu</h1>
              <div className="single_line"></div>
            </div>
          </div>
        </div>
        <div className="row">
          <ul className="nav nav-tabs menu_tab mb-4" id="myTab" role="tablist">
            <li className="nav-item">
              <a
                className={`nav-link ${activeTab === 'breakfast' ? 'active' : ''}`}
                id="breakfast-tab"
                data-toggle="tab"
             //   href="#breakfast"
                role="tab"
                onClick={() => changeTab('breakfast')}
              >
                Breakfast
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeTab === 'lunch' ? 'active' : ''}`}
                id="lunch-tab"
                data-toggle="tab"
             //   href="#lunch"
                role="tab"
                onClick={() => changeTab('lunch')}
              >
                Lunch
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeTab === 'dinner' ? 'active' : ''}`}
                id="dinner-tab"
                data-toggle="tab"
              //  href="#dinner"
                role="tab"
                onClick={() => changeTab('dinner')}
              >
                Dinner
              </a>
            </li>
          </ul>
        </div>
        <div className="row">
          <div className="tab-content col-lg-12" id="myTabContent">
            <div className={`tab-pane   ${activeTab === 'breakfast' ?  'show active' : ''}`} id="breakfast" role="tabpanel" aria-labelledby="breakfast-tab">
			{activeTab === 'breakfast' && (
			<div class="row flex m-5 space-x-8">
								<div className="col-md-6">
								<div class="single_menu space-x-8">
									<img src="https://i.imgur.com/kbpceNv.jpg" alt="burger"/>
									<div class="menu_content ">
										<h4>Chicken Burger  <span>$24</span></h4>
										<p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
									</div>
								</div>
								<div class="single_menu  space-x-8">
									<img src="https://i.imgur.com/lYKUORL.jpg" alt="black coffee"/>
									<div class="menu_content">
										<h4>Black coffee <span>$20</span></h4>
										<p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
									</div>
								</div>
								<div class="single_menu  space-x-8">
									<img src="https://i.imgur.com/AXAHrf6.jpg" alt="fried rice"/>
									<div class="menu_content">
										<h4>Fried Rice  <span>$45</span></h4>
										<p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
									</div>
								</div>
								<div class="single_menu  space-x-8">
									<img src="https://i.imgur.com/YkDi8Nb.jpg" alt="meat"/>
									<div class="menu_content">
										<h4>meat  <span>$24</span></h4>
										<p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
									</div>
								</div>
							</div>
							<div class="col-md-6">
								<div class="single_menu">
									<img src="https://i.imgur.com/TAq7lDR.jpg" alt="burger"/>
									<div class="menu_content">
										<h4>Chicken Burger  <span>$24</span></h4>
										<p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
									</div>
								</div>
								<div class="single_menu">
									<img src="https://i.imgur.com/lYKUORL.jpg" alt="black coffee"/>
									<div class="menu_content">
										<h4>Black coffee <span>$20</span></h4>
										<p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
									</div>
								</div>
								<div class="single_menu">
									<img src="https://i.imgur.com/AXAHrf6.jpg" alt="fried rice"/>
									<div class="menu_content">
										<h4>Fried Rice  <span>$45</span></h4>
										<p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
									</div>
								</div>
								<div class="single_menu">
									<img src="https://i.imgur.com/YkDi8Nb.jpg" alt="meat"/>
									<div class="menu_content">
										<h4>meat  <span>$24</span></h4>
										<p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
									</div>
								</div>
							</div>
			</div>
			)}
            </div>
            <div className={`tab-pane  ${activeTab === 'lunch' ? 'show active' : ''}`} id="lunch" role="tabpanel" aria-labelledby="lunch-tab">
			 {activeTab === 'lunch' && (
			<div class="row flex">
							<div class="col-md-6">
								<div class="single_menu">
									<img src="https://i.imgur.com/Aowufa1.jpg" alt="pizza"/>
									<div class="menu_content">
										<h4>12" Pizza  <span>$35</span></h4>
										<p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
									</div>
								</div>
								<div class="single_menu">
									<img src="https://i.imgur.com/DJlmZDJ.jpg" alt="salad"/>
									<div class="menu_content">
										<h4>Salad <span>$20</span></h4>
										<p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
									</div>
								</div>
								<div class="single_menu">
									<img src="https://i.imgur.com/knnQm7e.jpg" alt="green tea"/>
									<div class="menu_content">
										<h4>green tea <span>$15</span></h4>
										<p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
									</div>
								</div>
								<div class="single_menu">
									<img src="https://i.imgur.com/YkDi8Nb.jpg" alt="meat"/>
									<div class="menu_content">
										<h4>meat  <span>$24</span></h4>
										<p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
									</div>
								</div>
							</div>
							<div class="col-md-6">
								<div class="single_menu">
									<img src="https://i.imgur.com/kbpceNv.jpg" alt="burger"/>
									<div class="menu_content">
										<h4>Chicken Burger  <span>$24</span></h4>
										<p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
									</div>
								</div>
								<div class="single_menu">
									<img src="https://i.imgur.com/lYKUORL.jpg" alt="black coffee"/>
									<div class="menu_content">
										<h4>Black coffee <span>$20</span></h4>
										<p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
									</div>
								</div>
								<div class="single_menu">
									<img src="https://i.imgur.com/AXAHrf6.jpg" alt="fried rice"/>
									<div class="menu_content">
										<h4>Fried Rice  <span>$45</span></h4>
										<p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
									</div>
								</div>
								<div class="single_menu">
									<img src="https://i.imgur.com/YkDi8Nb.jpg" alt="meat"/>
									<div class="menu_content">
										<h4>meat  <span>$24</span></h4>
										<p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
									</div>
								</div>
							</div>
			</div>
			 )}
            </div>
            <div className={`tab-pane  ${activeTab === 'dinner' ? 'show active' : ''}`} id="dinner" role="tabpanel" aria-labelledby="dinner-tab">
				{activeTab === 'dinner' && (
			<div class="row flex">
							<div class="col-md-6">
								<div class="single_menu">
									<img src="https://i.imgur.com/kbpceNv.jpg" alt="burger"/>
									<div class="menu_content">
										<h4>Chicken Burger  <span>$24</span></h4>
										<p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
									</div>
								</div>
								<div class="single_menu">
									<img src="https://i.imgur.com/lYKUORL.jpg" alt="black coffee"/>
									<div class="menu_content">
										<h4>Black coffee <span>$20</span></h4>
										<p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
									</div>
								</div>
								<div class="single_menu">
									<img src="https://i.imgur.com/AXAHrf6.jpg" alt="fried rice"/>
									<div class="menu_content">
										<h4>Fried Rice  <span>$45</span></h4>
										<p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
									</div>
								</div>
								<div class="single_menu">
									<img src="https://i.imgur.com/YkDi8Nb.jpg" alt="meat"/>
									<div class="menu_content">
										<h4>meat  <span>$24</span></h4>
										<p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
									</div>
								</div>
							</div>
							<div class="col-md-6">
								<div class="single_menu">
									<img src="https://i.imgur.com/kbpceNv.jpg" alt="burger"/>
									<div class="menu_content">
										<h4>Chicken Burger  <span>$24</span></h4>
										<p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
									</div>
								</div>
								<div class="single_menu">
									<img src="https://i.imgur.com/lYKUORL.jpg" alt="black coffee"/>
									<div class="menu_content">
										<h4>Black coffee <span>$20</span></h4>
										<p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
									</div>
								</div>
								<div class="single_menu">
									<img src="https://i.imgur.com/AXAHrf6.jpg" alt="fried rice"/>
									<div class="menu_content">
										<h4>Fried Rice  <span>$45</span></h4>
										<p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
									</div>
								</div>
								<div class="single_menu">
									<img src="https://i.imgur.com/YkDi8Nb.jpg" alt="meat"/>
									<div class="menu_content">
										<h4>meat  <span>$24</span></h4>
										<p>Aperiam tempore sit,perferendis numquam repudiandae porro voluptate dicta saepe facilis.</p>
									</div>
								</div>
							</div>
			</div>
				)}
            </div>
          </div>
          <a href="#" className="menu_btn btn btn-danger">View More</a>
        </div>
      </div>
    </section>
  );
}

export default ProductList;
