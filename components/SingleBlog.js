import React from "react";
import styled from "styled-components";

const SingleBlog = ({ id }) => {
  let comment = true;
  return (
    <Wrap comment={comment} className="posts mb-30">
      <meta content={""} property="og:title" />
      <meta content={""} property="og:description" />
      <meta content="article" property="og:type" />
      <meta content={""} property="og:url" />
      <meta content={""} property="og:site_name" />
      <meta content="" itemProp="image_url" />
      <article className="post bg  mb-10">
        <h3 className="mb-20" itemProp="name">
          We are ready to Meet Baby No. 3. Checking into hospital for my 3rd
          C-Section in Lagos. I'm nervous but confident in God
        </h3>
        <div class="post-header">
          <span class="post-labels mb-10">
            <a href="/" rel="tag">
              Category
            </a>
          </span>
          <abbr class="date-header mb-20" itemprop="datePublished">
            Saturday, March 12, 2022
          </abbr>
        </div>
        <div class="post-body" id="" itemprop="description articleBody">
          <a className="mb-20" href="link to image">
            <img src="/whisper5.jpeg" alt="" />
          </a>
          <p className="text mb-30">
            We are ready to Meet Baby No. 3. Checking into hospital for my 3rd
            C-Section in Lagos. I'm nervous but confident in God. Follow my baby
            updates by subscribing to my YouTube channel We are ready to Meet
            Baby No. 3. Checking into hospital for my 3rd C-Section in Lagos.
            I'm nervous but confident in God. Follow my baby updates by
            subscribing to my YouTube channel
          </p>
        </div>
        <div className="post-footer">
          <span className="mb-30 border">
            <a href="">Read More</a>
          </span>
          <div className="post-share">
            <span>Share</span>
            <div className="post-social">
              <span className="border">F</span>
              <span className="border">t</span>
              <span className="border">tg</span>
              <span className="border">m</span>
              <span className="border">i</span>
            </div>
            <button>Leave a comment</button>
          </div>
        </div>
      </article>
      <article className={`comment-con border mb-30 `}>
        <h3 className={`no-comment ${comment ? "show" : ""}`}>
          <span style={{ display: "block", textAlign: "center" }}>😔😔😔</span>
          No Comments
        </h3>
        <div className="comment-inner">
          <div className={`mb-10 bg comment ${comment ? "show" : ""}`}>
            <div className="comment-header bg-p">
              <figure className="border">
                <img src="/bird-32.png" alt="profile pic" />
              </figure>
              <span>name names</span>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
              iusto pariatur atque natus itaque quidem.
            </p>
            <div className="comment-footer">
              <span className="comment-time">12th, tue dec 2022</span>
            </div>
          </div>
          <div className={`mb-10 bg comment ${comment ? "show" : ""}`}>
            <div className="comment-header bg-p">
              <figure className="border">
                <img src="/bird-32.png" alt="profile pic" />
              </figure>
              <span>name names</span>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
              iusto pariatur atque natus itaque quidem.
            </p>
            <div className="comment-footer">
              <span className="comment-time">12th, tue dec 2022</span>
            </div>
          </div>
          <div className={`mb-10 bg comment ${comment ? "show" : ""}`}>
            <div className="comment-header bg-p">
              <figure className="border">
                <img src="/bird-32.png" alt="profile pic" />
              </figure>
              <span>name names</span>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
              iusto pariatur atque natus itaque quidem.
            </p>
            <div className="comment-footer">
              <span className="comment-time">12th, tue dec 2022</span>
            </div>
          </div>

          <button className={` ${comment ? "show" : ""}`}>view more</button>
        </div>
        <span className="comment-count">no comments</span>
      </article>
    </Wrap>
  );
};

export default SingleBlog;
const Wrap = styled.section`
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  article {
    width: 100%;
    height: auto;
    min-height: 15vh;
  }
  .post {
    * {
      display: block;
    }
    padding: 30px 20px;
    h3 {
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-weight: 500;
    }
    .post-header {
      text-align: center;
      font-style: italic;
    }
    .post-header abbr {
      opacity: 0.7;
    }
    img {
      width: 100%;
      height: 100%;
    }
    .text {
      letter-spacing: 1px;
      line-height: 25px;
      font-size: 14px;
      text-align: justify;
    }
    .post-footer > span {
      margin: 0 auto;
      width: 12em;
      padding: 15px;
      text-align: center;
      cursor: pointer;
    }
    .post-share > span {
      text-align: center;
      margin-top: 40px;
      text-transform: uppercase;
      font-size: 20px;
    }
    .post-share .post-social {
      display: flex;
      width: 260px;
      margin: 0 auto;
      justify-content: space-around;
    }
    .post-share .post-social span {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 40px;
      width: 40px;
      border-radius: 50px;
      margin-top: 10px;
      margin-bottom: 20px;
    }
    .post-share button {
      text-align: center;
      margin: 0 auto;
      font-size: 20px;
      background: none;
      color: skyblue;
    }
    .post-share button:active,
    .post-share button:focus {
      color: blue;
    }
  }
  .comment-con {
    align-self: start;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    max-height: 1000px;
    display: flex;
    padding: 5px;
    .comment-inner {
      overflow-y: auto;
    }
    .no-comment {
      color: tomato;
      display: block;
    }
    .comment {
      display: none;
      padding: 5px;
      .comment-header {
        display: flex;
        align-items: center;
        padding: 3px 5px;
      }
      .comment-header figure {
        height: 35px;
        width: 35px;
        border-radius: 50%;
        margin-right: 10px;
      }
      p {
        font-size: 13px;
        padding: 10px;
        padding: 3px 0;
      }
    }
    .no-comment.show {
      display: none;
    }
    .comment.show {
      display: block;
    }
    .comment-footer {
      opacity: 0.5;
      font-size: 13px;
    }
    button {
      padding: 10px;
      color: tomato;
      display: none;
    }
    button.show {
      display: block;
      padding: 10px;
      color: tomato;
      margin: 0 auto;
    }
    > span {
      opacity: 0.5;
      margin-top: 10px;
    }
  }
  @media screen and (max-width: 500px) {
    .post {
      h3 {
        font-size: 18px;
      }
    }
  }
  @media screen and (min-width: 760px) {
    flex-direction: row;
    article:first-of-type {
      width: 55%;
    }
    article:last-of-type {
      width: 40%;
    }
  }
  @media screen and (min-width: 1000px) {
    width: 90vw;
    flex-direction: row;
    article:first-of-type {
      width: 50%;
    }
    article:last-of-type {
      width: 30%;
    }
  }
`;
/*
      border: 2px solid red;
.comment.show {
      display: ${(props) => {
        return props.comment ? "block" : "none";
      }};
    }
<div class="post-outer">
<meta content="BIRTH VLOG : 3rd C-Section + Last Meal + Checking Into Hospital + How I Feel ( Day 1)" property="og:title">
<meta content="" property="og:description">
<meta content="article" property="og:type">
<meta content="http://www.sisiyemmie.com/2022/03/birth-vlog-3rd-c-section-last-meal.html" property="og:url">
<meta content="SISIYEMMIE: Nigerian Food &amp; Lifestyle Blog " property="og:site_name">
<meta content="2022-03-12T17:11:00Z" property="article:published_time">
<meta content="Food" property="article:section">
<meta content="Momlife" property="article:tag">
<div class="post hentry" itemprop="blogPost" itemscope="itemscope" itemtype="http://schema.org/BlogPosting">
<meta content="https://blogger.googleusercontent.com/img/a/AVvXsEj3LUFk8KvZNmEcyWXJ2VuZr5tXqq8rCQF5dXezCw4MR7E1y6gASRHrPBFHMyswUsO_sBzsXI2NTuBY4xz5SouTkRUtEzcr4mvMNLneS9OU0Pa2woq9iS_wi05s2gYC6SkIawi-AwzlOny15FugmEN8Mj4GOXKD9sdbx8Y_EWDXfWYUCo3mdZ-5DvL9=w640-h360" itemprop="image_url">
<meta content="8524602601769529186" itemprop="blogId">
<meta content="3420074453686085401" itemprop="postId">
<a name="3420074453686085401"></a>
<h3 class="post-title entry-title" itemprop="name">
BIRTH VLOG : 3rd C-Section + Last Meal + Checking Into Hospital + How I Feel ( Day 1)
</h3>
<div class="post-header">
<span class="post-labels">
<a href="http://www.sisiyemmie.com/search/label/Momlife?&amp;max-results=20" rel="tag">Momlife</a>
</span>
<abbr class="date-header" itemprop="datePublished">Saturday, March 12, 2022</abbr>
<script type="text/javascript"> postDate = "Saturday, March 12, 2022"; </script>
<div class="post-header-line-1"></div>
</div>
<div class="post-body entry-content" id="post-body-3420074453686085401" itemprop="description articleBody">
<br><br><div class="separator" style="clear: both; text-align: justify;"><a href="https://blogger.googleusercontent.com/img/a/AVvXsEj3LUFk8KvZNmEcyWXJ2VuZr5tXqq8rCQF5dXezCw4MR7E1y6gASRHrPBFHMyswUsO_sBzsXI2NTuBY4xz5SouTkRUtEzcr4mvMNLneS9OU0Pa2woq9iS_wi05s2gYC6SkIawi-AwzlOny15FugmEN8Mj4GOXKD9sdbx8Y_EWDXfWYUCo3mdZ-5DvL9=s1280" imageanchor="1" style="margin-left: 1em; margin-right: 1em;"><img border="0" data-original-height="720" data-original-width="1280" height="360" src="https://blogger.googleusercontent.com/img/a/AVvXsEj3LUFk8KvZNmEcyWXJ2VuZr5tXqq8rCQF5dXezCw4MR7E1y6gASRHrPBFHMyswUsO_sBzsXI2NTuBY4xz5SouTkRUtEzcr4mvMNLneS9OU0Pa2woq9iS_wi05s2gYC6SkIawi-AwzlOny15FugmEN8Mj4GOXKD9sdbx8Y_EWDXfWYUCo3mdZ-5DvL9=w640-h360" width="640"></a>We are ready to Meet Baby No. 3. Checking into hospital for my 3rd C-Section in Lagos. I'm nervous but confident in God. Follow my baby updates by subscribing to my YouTube channel <a href="https://www.youtube.com/channel/UCgiZJgpmzcbCW30ywLHVPkQ" target="_blank">HERE</a>&nbsp;. If you have questions about my birth experience, leave them in the comment section.&nbsp;</div><span><a name="more"></a></span><div class="separator" style="clear: both; text-align: center;"><div style="max-width:492px;margin:0 auto; padding:5px;"><div style="position: relative;padding-bottom: 66.87%; height: 0; overflow: hidden;"><iframe allowfullscreen="" class="BLOG_video_class" height="329" src="https://www.youtube.com/embed/eNSBXTe5MQY" width="492" youtube-src-id="eNSBXTe5MQY" style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; max-width: 492px; max-height: 329px;"></iframe></div></div></div><br><div class="separator" style="clear: both; text-align: justify;"><br></div>
<div style="clear: both;"></div>
</div>
<div class="post-footer">
<div class="post-footer-line post-footer-line-1"><span class="post-author vcard">
Posted by
<span class="fn" itemprop="author" itemscope="itemscope" itemtype="http://schema.org/Person">
<meta content="https://www.blogger.com/profile/15350113579849499656" itemprop="url">
<a class="g-profile" href="https://www.blogger.com/profile/15350113579849499656" rel="author" title="author profile" data-gapiscan="true" data-onload="true" data-gapiattached="true">
<span itemprop="name">Sisi Yemmie</span>
</a>
</span>
</span>
<span class="post-timestamp">
at
<abbr class="published" itemprop="datePublished" title="2022-03-12T17:11:00Z">Saturday, March 12, 2022</abbr>
</span>
<span class="post-location">
</span>
</div>
<div class="post-footer-line post-footer-line-2">
</div>
<div class="post-footer-line post-footer-line-3">
<div class="share-buttons">
<span class="share-text">Share</span>
<a class="hs-icon fa fatw" href="http://twitter.com/intent/tweet?text=BIRTH VLOG : 3rd C-Section + Last Meal + Checking Into Hospital + How I Feel ( Day 1)&amp;url=http://www.sisiyemmie.com/2022/03/birth-vlog-3rd-c-section-last-meal.html" target="_blank" title="Tweet This"></a>
<a class="hs-icon fa fafa" href="http://www.facebook.com/sharer.php?u=http://www.sisiyemmie.com/2022/03/birth-vlog-3rd-c-section-last-meal.html&amp;t=BIRTH VLOG : 3rd C-Section + Last Meal + Checking Into Hospital + How I Feel ( Day 1)" target="_blank" title="Share On Facebook"></a>
<a class="hs-icon fa fago" href="https://plusone.google.com/_/+1/confirm?hl=en&amp;url=http://www.sisiyemmie.com/2022/03/birth-vlog-3rd-c-section-last-meal.html" target="_blank" title="Share On Google Plus"></a>
<a class="hs-icon fa fapi" href="javascript:void((function()%7Bvar%20e=document.createElement('script');e.setAttribute('type','text/javascript');e.setAttribute('charset','UTF-8');e.setAttribute('src','http://assets.pinterest.com/js/pinmarklet.js?r='+Math.random()*99999999);document.body.appendChild(e)%7D)());" title="Pin it"></a>
<a class="hs-icon icon-gplus fa fa-comment-o" href="http://www.sisiyemmie.com/2022/03/birth-vlog-3rd-c-section-last-meal.html#comment-form" onclick=""></a>
<span class="post-comment-link">
<a href="http://www.sisiyemmie.com/2022/03/birth-vlog-3rd-c-section-last-meal.html#comment-form" onclick="">Leave a Comment</a>
</span>
</div>
</div>
</div>
<div class="post-pagination">
<div class="blog-pager" id="blog-pager">
<span id="blog-pager-newer-link">
<a class="blog-pager-newer-link" href="http://www.sisiyemmie.com/2022/03/lucrative-work-from-home-jobs-side.html" id="Blog1_blog-pager-newer-link" title="Newer Post"><h4><b>← Previous Story</b></h4><h3>
Lucrative Work From Home Jobs &amp; Side Hustles in the Food Industry for 2022
</h3><h3></h3></a>
</span>
<span id="blog-pager-older-link">
<a class="blog-pager-older-link" href="http://www.sisiyemmie.com/2022/03/how-to-roast-your-own-fish-at-home.html" id="Blog1_blog-pager-older-link" title="Older Post"><h4><b>Next Story →</b></h4><h3>
HOW TO ROAST YOUR OWN FISH AT HOME - Smoked Panla Fish 👌🏾 #EjaKika
</h3></a>
</span>
</div>
<div class="clear"></div>
</div>
<script type="text/javascript">
//<![CDATA[
(function(c){c.fn.relatedPostsWidget=function(s){if(!this.size())return this;s=c.extend({},c.fn.relatedPostsWidget.defaults,s);return this.each(function(){var k=c(this),z=0,g=null,p=null,t=0,q=0,l=-1,n=-1,u=-1,r=null,v=0,w=null,A="",b=s,F=function(){if(!((l+1)*b.show_n>=q&&!b.animate_loop))if(!v){c("li",g).eq(n).fadeOut(b.exit_time,B);b.show_n>1&&c("li",g).slice(n+1,u).fadeOut(b.exit_time)}},B=function(){if(g.parent().size()){l++;if(l*b.show_n>=q)l=0;n=l*b.show_n;u=(l+1)*b.show_n;c("li",g).eq(n).animate(r,
b.enter_time,"linear",C);b.show_n>1&&c("li",g).slice(n+1,u).animate(r,b.enter_time)}},C=function(){w&&clearTimeout(w);w=setTimeout(F,b.stay_time)},G=function(){r={};r[b.animate]="show";g.bind("mouseenter",function(){v=1}).bind("mouseleave",function(){v=0;C()});B()},x=function(){if(!(t||!g)){b.loading_class&&g.removeClass(b.loading_class);b.max_posts&&b.tags.length&&c("li:gt("+(b.max_posts-1)+")",g).remove();q=c("li",g).size();b.tags.length&&b.timeout&&b.max_posts&&c("img",g).each(function(){var d=
c(this);d.attr("rel")&&d.attr("src",d.attr("rel"))});if(b.show_n==0)c("li",g).show();else q&&G();t=1}},E=function(d){if(!t){z++;if(d.feed.entry){if(!g){k.html("");if(b.tags.length==0)b.recent_title&&c("<h2><span>"+b.recent_title+"</span></h2>").appendTo(k);else b.related_title&&c("<h2><span>"+b.related_title+"</span></h2>").appendTo(k);g=c('<ul class="rpw '+b.loading_class+'"></ul>').appendTo(k)}for(var i=0,o=d.feed.entry.length;i<o;i++){var e=d.feed.entry[i],h;a:{var f=0;for(h=e.link.length;f<h;f++)if(e.link[f].rel=="alternate"){h=
e.link[f].href;break a}h=""}f=e.title.$t;e=e.media$thumbnail?e.media$thumbnail.url:b.thumb_default;if(h!=A||b.tags.length==0)a:{var j=h,m=f,H=e;if(b.tags.length>0){e=c("li",g);f=0;for(var I=e.length;f<I;f++){var y=c("a",e.eq(f));h=D(y);if(y.attr("href")==j){j=y;m=++h;j.attr("score",m);b.post_score_class&&j.attr("class",b.post_score_class+m);for(j=f-1;j>=0;j--){m=c("a",e.eq(j));if(D(m)>h){f-j>1&&e.eq(j).after(e.eq(f));break a}}f>0&&e.eq(0).before(e.eq(f));break a}}}e=j;f=m;h=H;if(b.thumb_size!="s72-c")h=
h.replace("/s72-c/","/"+b.thumb_size+"/");j=b.tags.length&&b.timeout&&b.max_posts?"rel":"src";g.append('<li style="display:none"><a href="'+e+'">'+(b.thumbs&&h?"<span><img "+j+'="'+h+'" title="'+(b.titles?"":f)+'" border="0"/></span>':"")+(b.titles?"<strong>"+f+"</strong>":"")+"</a></li>")}}}if(z>=b.tags.length){p&&clearTimeout(p);x()}}},D=function(d){d=parseInt(d.attr("score"));return d>0?d:1},J=function(){if(!b.tags){b.tags=[];c('a[rel="tag"]:lt('+b.max_tags+")").each(function(){var e=c.trim(c(this).text().replace(/\n/g,
""));if(c.inArray(e,b.tags)==-1)b.tags[b.tags.length]=e})}var d=b.blog_url+"/feeds/posts/summary/";if(b.tags.length==0){if(b.timeout)p=setTimeout(x,b.timeout);c.ajax({url:d,data:{"max-results":b.max_posts,alt:"json-in-script"},success:E,dataType:"jsonp",cache:true})}else{if(b.timeout)p=setTimeout(x,b.timeout*b.tags.length);for(var i=0,o=b.tags.length;i<o;i++)c.ajax({url:d,data:{category:b.tags[i],"max-results":b.posts_per_tag,alt:"json-in-script"},success:E,dataType:"jsonp",cache:true})}};(function(){var d=
k.attr("data-options");if(!d){var i=k.html().replace(/\n|\r\n/g,"");if(i)if((i=i.match(/<!--\s*(\{.+\});?\s*--\>/))&&i.length==2)d=i[1]}if(d){if(d.indexOf("{")<0)d="{"+d+"}";try{b=eval("("+d+")")}catch(o){a.html('<b style="color:red">'+o+"</b>");return null}b=c.extend({},c.fn.relatedPostsWidget.defaults,b)}if(b.post_page_only?location.pathname.match(/^\/\d{4}\/\d\d\/[\w\-\_]+\.html/):true){A=location.protocol+"//"+location.host+location.pathname+(b.url_querystring?location.search:"");J()}})()})};
c.fn.relatedPostsWidget.defaults={blog_url:"",max_posts:5,max_tags:5,posts_per_tag:5,tags:false,loading_class:"rpw-loading",related_title:"You Might Also Like",recent_title:"Recent Posts",post_score_class:"",post_page_only:0,thumb_default:"",thumb_size:"s72-c",thumbs:1,titles:1,url_querystring:0,timeout:1500,show_n:0,stay_time:5E3,enter_time:200,exit_time:200,animate:"opacity",animate_loop:1}})(jQuery);jQuery(document).ready(function(){jQuery("div.related-posts-widget").relatedPostsWidget()});
//]]>  
</script>
<div class="related-posts-widget"><h2><span>You Might Also Like</span></h2><ul class="rpw"><li style=""><a href="http://www.sisiyemmie.com/2022/02/sisi-yemmies-baby-sprinkle-team-boy-or.html"><span><img rel="https://blogger.googleusercontent.com/img/a/AVvXsEhk6q_YcjCZaLM-BZq79RDmovLIh_S7FphwjJx-Jj3Mz2sfyA_lNY1mqNGPsJJOkU8KciBlQZW2CLlfbFXCx3WRVolVQH4ej5HzfGUxwLILGJD_8ghyNOXGIwM-HN4U7owLNDDOmgFGqnbl32_r4F5hrryN5FuvDX6tIc1YmnfLM3egy3ILRNjtt2G1=s72-w640-h360-c" title="" border="0" src="https://blogger.googleusercontent.com/img/a/AVvXsEhk6q_YcjCZaLM-BZq79RDmovLIh_S7FphwjJx-Jj3Mz2sfyA_lNY1mqNGPsJJOkU8KciBlQZW2CLlfbFXCx3WRVolVQH4ej5HzfGUxwLILGJD_8ghyNOXGIwM-HN4U7owLNDDOmgFGqnbl32_r4F5hrryN5FuvDX6tIc1YmnfLM3egy3ILRNjtt2G1=s72-w640-h360-c"></span><strong>Sisi Yemmie's BABY SPRINKLE! | Team Boy or Team Girl? | Baby No. 3!</strong></a></li><li style=""><a href="http://www.sisiyemmie.com/2022/01/sisiweekly-is-back-2021-into-2022.html"><span><img rel="https://blogger.googleusercontent.com/img/a/AVvXsEgXgPxy9foWrG8MVYcaQEwr4ueEQQ-_14gJ5Mu_vVg15dtlUYmHKQhJgJjwfaBMnELO9k2D_YsacI561wQalOg7kCrdB9HUION2za7yky244kSygZrFPH3KTk6wjRLNEjci_JfCyUErYfUEDAsG3Ve6R3TrX1wXu1RjKqCeOJDBrCX4XzyN3dWMPufd=s72-w640-h360-c" title="" border="0" src="https://blogger.googleusercontent.com/img/a/AVvXsEgXgPxy9foWrG8MVYcaQEwr4ueEQQ-_14gJ5Mu_vVg15dtlUYmHKQhJgJjwfaBMnELO9k2D_YsacI561wQalOg7kCrdB9HUION2za7yky244kSygZrFPH3KTk6wjRLNEjci_JfCyUErYfUEDAsG3Ve6R3TrX1wXu1RjKqCeOJDBrCX4XzyN3dWMPufd=s72-w640-h360-c"></span><strong>SISIWEEKLY IS BACK : 2021 INTO 2022 !</strong></a></li><li style=""><a href="http://www.sisiyemmie.com/2022/01/ways-to-save-money-on-food-in-2022-tips.html"><span><img rel="https://blogger.googleusercontent.com/img/a/AVvXsEhjuHo6q1i3eROPZNdxeKSruTc-X24vG43YlsTrd3yhgnQOvcLflXX97AlUQRar4L9Xw21jYaQCI-6lpcvWwjfUNs_gNaZEUhrO3B3DePKfbqiUrxH2PuwZ_5nIbskJiTD6Xgw2TvznSVD8d-UTZSIVmqTxAs84NEPi0eaFmRHTW_P0Ftf7jYg6I3uT=s72-w640-h360-c" title="" border="0" src="https://blogger.googleusercontent.com/img/a/AVvXsEhjuHo6q1i3eROPZNdxeKSruTc-X24vG43YlsTrd3yhgnQOvcLflXX97AlUQRar4L9Xw21jYaQCI-6lpcvWwjfUNs_gNaZEUhrO3B3DePKfbqiUrxH2PuwZ_5nIbskJiTD6Xgw2TvznSVD8d-UTZSIVmqTxAs84NEPi0eaFmRHTW_P0Ftf7jYg6I3uT=s72-w640-h360-c"></span><strong>Ways To SAVE MONEY On FOOD In 2022! Tips &amp; Tricks!</strong></a></li><li style=""><a href="http://www.sisiyemmie.com/2021/12/our-lives-are-changing.html"><span><img rel="https://1.bp.blogspot.com/-QaQuO_5H3hA/YaezVt68cTI/AAAAAAAAZTY/56yEy33msg4wXvb_OzZdQOOsgEVgEFdIQCLcBGAsYHQ/s165-c/SISI%2BYEMMIE%2BPREGNANT%2BBABY%2B3.JPG" title="" border="0" src="https://1.bp.blogspot.com/-QaQuO_5H3hA/YaezVt68cTI/AAAAAAAAZTY/56yEy33msg4wXvb_OzZdQOOsgEVgEFdIQCLcBGAsYHQ/s165-c/SISI%2BYEMMIE%2BPREGNANT%2BBABY%2B3.JPG"></span><strong>OUR LIVES ARE CHANGING...</strong></a></li></ul></div>
</div>
<div class="comments" id="comments">
<a name="comments"></a>
<h4><span>No comments</span></h4>
<div id="Blog1_comments-block-wrapper">
<dl class="avatar-comment-indent" id="comments-block">
</dl>
</div>
<p class="comment-footer">
</p><div class="comment-form">
<a name="comment-form"></a>
<p>Your comments are like delicious grains of jollof rice to me: please feed me! Send me love mail sisi@sisiyemmie.com  / Official business@sisiyemmie.com</p>
<a href="https://www.blogger.com/comment-iframe.g?blogID=8524602601769529186&amp;postID=3420074453686085401&amp;blogspotRpcToken=8410091" id="comment-editor-src"></a>
<iframe allowtransparency="true" class="blogger-iframe-colorize blogger-comment-from-post" frameborder="0" height="194px" id="comment-editor" name="comment-editor" src="https://www.blogger.com/comment-iframe.g?blogID=8524602601769529186&amp;postID=3420074453686085401&amp;blogspotRpcToken=8410091#%7B%22color%22%3A%22rgb(34%2C%2034%2C%2034)%22%2C%22backgroundColor%22%3A%22rgb(255%2C%20255%2C%20255)%22%2C%22unvisitedLinkColor%22%3A%22rgb(227%2C%203%2C%20139)%22%2C%22fontFamily%22%3A%22%5C%22Source%20Sans%20Pro%5C%22%2C%20sans-serif%22%7D" width="100%" data-resized="true"></iframe>
<!--Can't find substitution for tag [post.friendConnectJs]-->
<script src="https://www.blogger.com/static/v1/jsbin/4266180716-comment_from_post_iframe.js" type="text/javascript"></script>
<script type="text/javascript">
      BLOG_CMT_createIframe('https://www.blogger.com/rpc_relay.html');
    </script>
</div>
<p></p>
<div id="backlinks-container">
<div id="Blog1_backlinks-container">
</div>
</div>
</div>
</div>
*/
{
  /* <meta content="BIRTH VLOG : 3rd C-Section + Last Meal + Checking Into Hospital + How I Feel ( Day 1)" property="og:title">
<meta content="Nigerian Lifestyle Blog About Food, Motherhood, Relationships, Career, Beauty and Blogging!" property="og:description">
<meta content="article" property="og:type">
<meta content="http://www.sisiyemmie.com/" property="og:url">
<meta content="SISIYEMMIE: Nigerian Food &amp; Lifestyle Blog " property="og:site_name">
<meta content="https://blogger.googleusercontent.com/img/a/AVvXsEj3LUFk8KvZNmEcyWXJ2VuZr5tXqq8rCQF5dXezCw4MR7E1y6gASRHrPBFHMyswUsO_sBzsXI2NTuBY4xz5SouTkRUtEzcr4mvMNLneS9OU0Pa2woq9iS_wi05s2gYC6SkIawi-AwzlOny15FugmEN8Mj4GOXKD9sdbx8Y_EWDXfWYUCo3mdZ-5DvL9=w640-h360" itemprop="image_url"></meta> */
}
