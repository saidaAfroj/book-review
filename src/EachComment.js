import React from "react";
import Avatars from "./img/avatar";

class EachComment extends React.Component {
    constructor(props) {
        super(props);
    }
    
    avatarSelect = avatarId => {
      if (avatarId === null) {
        return Avatars.av6;
      }
      const avatarArray = {
        0: Avatars.av0,
        1: Avatars.av1,
        2: Avatars.av2,
        3: Avatars.av3,
        4: Avatars.av4,
        5: Avatars.av5,
        6: Avatars.av6,
        7: Avatars.av7,
        8: Avatars.av8,
        9: Avatars.av9,
      };
      return avatarArray[avatarId];
    };
    
    getAvatarId (name) {
        var sum = 0;
        for(var i=0; i<name.length;i++)
        {
            sum += name.charCodeAt(i);
        }
        
        return sum%10;
    }
    
    getPostTime(days){
        if (days==0) return "Posted today";
        if (days==1) return "Posted yesterday";
        if (days<7) return "Posted " + days + " days ago";
        if (days <14) return "Posted a week ago";
        if (days<30) return "Posted " + Math.floor(days/7) + " weeks ago";
        if (days <60) return "Posted a month ago";
        return "Posted " + Math.floor(days/30) + " months ago"
    }
    
    render() {
		return(
        <li class="cmmnt">
            <div class="avatar">
            <a href="javascript:void(0);">
                <img src={this.avatarSelect(this.getAvatarId(this.props.comment.name))} width="55" height="55" alt="User image not available"/>
            </a></div>
            <div class="cmmnt-content">
                <header>
                    <a href="javascript:void(0);" class="userlink">{this.props.comment.name}</a> - 
                    <span class="pubdate">{this.getPostTime(this.props.comment.daysAgo)}</span>
                </header>
                <p> {this.props.comment.comment} </p>
            </div>
        </li>);
	}
	
}

export default EachComment;