var display={};display.players=function(a){var r=a||playerAdmin.players,t="";r.forEach(function(a){t+="<tr>",t+="<td>"+a.name+"</td>",t+="<td>"+a.email+"</td>",t+="</tr>"}),$("#playerList").append(t)};