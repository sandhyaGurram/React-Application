import React, { useState } from 'react'
import useCustomHook from './CustomHook'

const Vegitables = () => {
    const posts=useCustomHook("http://localhost:4000/vegitableList")
    const [count,setcount]=useState(0)
    const [count1,setcount1]=useState(0)
    const [count2,setcount2]=useState(0)
    const [count3,setcount3]=useState(0)
    const [count4,setcount4]=useState(0)
    const [count5,setcount5]=useState(0)
    const [count6,setcount6]=useState(0)
  return (
    <div className='container p-5 vegitables'>
        <div className='row'>
            {posts.map((item)=>{
                return (
                    <div className='col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-3'>
                <div className='card'>
                    <img src={item.image} alt=''/>
                    <div className='card-body text-center'>
                        <p>{item.vegname}</p>
                        <p><strong>${item.price}.00</strong></p>
                        {/* <ul>
                            <button onClick={()=>setcount(count+1)}><i class="bi bi-plus-lg"></i></button>
                            <button>{count}</button>
                            <button onClick={()=>setcount(count-1)}><i class="bi bi-dash-lg"></i></button>
                        </ul> */}
                    </div>
                </div>
            </div>
                )
            })}
            
            {/* <div className='col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-3'>
                <div className='card'>
                    <img src="https://www.kindpng.com/picc/m/786-7862788_single-vegetables-hd-png-download.png" />
                    <div className='card-body text-center'>
                        <p>Carrote</p>
                        <p><strong>$30.00</strong></p>
                        <ul>
                            <button onClick={()=>setcount1(count1+1)}>+</button>
                            <button>{count1}</button>
                            <button onClick={()=>setcount1(count1-1)}><i class="bi bi-dash-lg"></i></button>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-3'>
                <div className='card'>
                    <img src="https://tse2.explicit.bing.net/th?id=OIP.DoisE9w4_TgFkc9Nw1f3CQHaHr&pid=Api&P=0&h=180" />
                    <div className='card-body text-center'>
                        <p>Carrote</p>
                        <p><strong>$30.00</strong></p>
                        <ul>
                            <button onClick={()=>setcount2(count2+1)}>+</button>
                            <button>{count2}</button>
                            <button onClick={()=>setcount2(count2-1)}><i class="bi bi-dash-lg"></i></button>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className='col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-3'>
                <div className='card'>
                    <img src="https://foodrevolution.org/wp-content/uploads/blog-featured_purple_veggies-20180312.jpg" />
                    <div className='card-body text-center'>
                        <p>Carrote</p>
                        <p><strong>$30.00</strong></p>
                        <ul>
                            <button onClick={()=>setcount3(count3+1)}>+</button>
                            <button>{count3}</button>
                            <button onClick={()=>setcount3(count3-1)}><i class="bi bi-dash-lg"></i></button>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-3'>
                <div className='card'>
                    <img src="https://qph.cf2.quoracdn.net/main-qimg-bef85c9a97c9e0edf3c8b30b2ae55c25-lq" />
                    <div className='card-body text-center'>
                        <p>Carrote</p>
                        <p><strong>$30.00</strong></p>
                        <ul>
                            <button onClick={()=>setcount4(count4+1)}>+</button>
                            <button>{count4}</button>
                            <button onClick={()=>setcount4(count4-1)}><i class="bi bi-dash-lg"></i></button>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-3'>
                <div className='card'>
                    <img src="https://www.frecery.com/wp-content/uploads/2020/05/onion-red-1-kg-d66e.jpg" />
                    <div className='card-body text-center'>
                        <p>Carrote</p>
                        <p><strong>$30.00</strong></p>
                        <ul>
                            <button onClick={()=>setcount5(count5+1)}>+</button>
                            <button>{count5}</button>
                            <button onClick={()=>setcount5(count5-1)}><i class="bi bi-dash-lg"></i></button>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-3'>
                <div className='card'>
                    <img src="https://www.frecery.com/wp-content/uploads/2020/05/onion-red-1-kg-d66e.jpg" />
                    <div className='card-body text-center'>
                        <p>Carrote</p>
                        <p><strong>$30.00</strong></p>
                        <ul>
                            <button onClick={()=>setcount6(count6+1)}>+</button>
                            <button>{count6}</button>
                            <button onClick={()=>setcount6(count6-1)}><i class="bi bi-dash-lg"></i></button>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-3'>
                <div className='card'>
                    <img src="https://www.kiddoworksheets.com/wp-content/uploads/wpdm-cache/Mushroom-Sliding-Puzzle-400x400.png" />
                    <div className='card-body text-center'>
                        <p>Carrote</p>
                        <p><strong>$30.00</strong></p>
                        <ul>
                            <button onClick={()=>setcount(count+1)}>+</button>
                            <button>{count}</button>
                            <button onClick={()=>setcount(count-1)}><i class="bi bi-dash-lg"></i></button>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-3'>
                <div className='card'>
                    <img src="https://tse2.mm.bing.net/th?id=OIP.mLPbIKoTZ7fmHoqW18QmnAHaF7&pid=Api&P=0&h=180" />
                    <div className='card-body text-center'>
                        <p>Carrote</p>
                        <p><strong>$30.00</strong></p>
                        <ul>
                            <button onClick={()=>setcount(count+1)}>+</button>
                            <button>{count}</button>
                            <button onClick={()=>setcount(count-1)}><i class="bi bi-dash-lg"></i></button>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-3'>
                <div className='card'>
                    <img src="https://www.kindpng.com/picc/m/786-7862788_single-vegetables-hd-png-download.png" />
                    <div className='card-body text-center'>
                        <p>Carrote</p>
                        <p><strong>$30.00</strong></p>
                        <ul>
                            <button onClick={()=>setcount(count+1)}>+</button>
                            <button>{count}</button>
                            <button onClick={()=>setcount(count-1)}><i class="bi bi-dash-lg"></i></button>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-3'>
                <div className='card'>
                    <img src="https://tse2.explicit.bing.net/th?id=OIP.DoisE9w4_TgFkc9Nw1f3CQHaHr&pid=Api&P=0&h=180" />
                    <div className='card-body text-center'>
                        <p>Carrote</p>
                        <p><strong>$30.00</strong></p>
                        <ul>
                            <button onClick={()=>setcount(count+1)}>+</button>
                            <button>{count}</button>
                            <button onClick={()=>setcount(count-1)}><i class="bi bi-dash-lg"></i></button>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className='col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-3'>
                <div className='card'>
                    <img src="https://foodrevolution.org/wp-content/uploads/blog-featured_purple_veggies-20180312.jpg" />
                    <div className='card-body text-center'>
                        <p>Carrote</p>
                        <p><strong>$30.00</strong></p>
                        <ul>
                            <button onClick={()=>setcount(count+1)}>+</button>
                            <button>{count}</button>
                            <button onClick={()=>setcount(count-1)}><i class="bi bi-dash-lg"></i></button>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-3'>
                <div className='card'>
                    <img src="https://qph.cf2.quoracdn.net/main-qimg-bef85c9a97c9e0edf3c8b30b2ae55c25-lq" />
                    <div className='card-body text-center'>
                        <p>Carrote</p>
                        <p><strong>$30.00</strong></p>
                        <ul>
                            <button onClick={()=>setcount(count+1)}>+</button>
                            <button>{count}</button>
                            <button onClick={()=>setcount(count-1)}><i class="bi bi-dash-lg"></i></button>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-3'>
                <div className='card'>
                    <img src="https://www.frecery.com/wp-content/uploads/2020/05/onion-red-1-kg-d66e.jpg" />
                    <div className='card-body text-center'>
                        <p>Carrote</p>
                        <p><strong>$30.00</strong></p>
                        <ul>
                            <button onClick={()=>setcount(count+1)}>+</button>
                            <button>{count}</button>
                            <button onClick={()=>setcount(count-1)}><i class="bi bi-dash-lg"></i></button>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-3'>
                <div className='card'>
                    <img src="https://www.frecery.com/wp-content/uploads/2020/05/onion-red-1-kg-d66e.jpg" />
                    <div className='card-body text-center'>
                        <p>Carrote</p>
                        <p><strong>$30.00</strong></p>
                        <ul>
                            <button onClick={()=>setcount(count+1)}>+</button>
                            <button>{count}</button>
                            <button onClick={()=>setcount(count-1)}><i class="bi bi-dash-lg"></i></button>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 mb-3'>
                <div className='card'>
                    <img src="https://www.kiddoworksheets.com/wp-content/uploads/wpdm-cache/Mushroom-Sliding-Puzzle-400x400.png" />
                    <div className='card-body text-center'>
                        <p>Carrote</p>
                        <p><strong>$30.00</strong></p>
                        <ul>
                            <button onClick={()=>setcount(count+1)}>+</button>
                            <button>{count}</button>
                            <button onClick={()=>setcount(count-1)}><i class="bi bi-dash-lg"></i></button>
                        </ul>
                    </div>
                </div>
            </div>
        */}
        </div> 
    </div>
  )
}

export default Vegitables