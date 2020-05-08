// pages/result/result.js
Page({
  handleBack: function () {
    wx.navigateBack({
      delta: 2,
    });
  },
  /**
   * 页面的初始数据
   */
  data: {
    title: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options);
    var ids = options.options;
    var type = options.type;
    var img = options.img;
    var listType = options.listType;
    // var title = options.title;
    if (listType == "character") {
      if (type == 0) {
        this.setData({
          img: img,
        });
        if (ids == 1) {
          this.setData({
            title: options.title,
            result:
              "你的随和个性让大家每次出去玩都不会忘了你，因为你能充分合作，立刻附和大家的提议，而且把所有事情都先打理好。",
          });
        } else if (ids == 2) {
          this.setData({
            title: options.title,
            result: "你的温婉是个人最重要的特质，对别人付出关心、不求报偿。",
          });
        } else if (ids == 3) {
          this.setData({
            title: options.title,
            result:
              "你鬼点子超多，每次有你在，就不愁没什么新鲜好玩的。可是你的稳定性稍显不足，也有一点点过于独裁。",
          });
        } else {
          this.setData({
            title: options.title,
            result:
              "你是个活泼好动的人，要你静下来是件挺困难的事，你喜欢和朋友打成一片，大家一起打打闹闹，玩得不亦乐乎。",
          });
        }
      } else if (type == 1) {
        this.setData({
          img: img,
        });
        if (ids == 1) {
          this.setData({
            title: options.title,
            result:
              "你是一个很悠闲的人，这种人很懂得生活，无论是在学校里还是工作上都颇具领导才能和人格魅力。",
          });
        } else if (ids == 2) {
          this.setData({
            title: options.title,
            result:
              "你是个有情调的人，这种人喜欢浪漫，和朋友在一起时总是想让别人听从你的安排。",
          });
        } else if (ids == 3) {
          this.setData({
            title: options.title,
            result:
              "你是先做后说的人，这种人很看重自己的欲望，会千方百计地满足自己。",
          });
        } else {
          this.setData({
            title: options.title,
            result:
              "你是那种有一定审美情趣的人，这种人有良好的生活习惯，在工作方面不喜欢太过拘泥。",
          });
        }
      } else if (type == 2) {
        this.setData({
          img: img,
        });
        if (ids == 1) {
          this.setData({
            title: options.title,
            result: "你注重交际，善于思考，办事有主见，对未来持乐观态度。",
          });
        } else if (ids == 2) {
          this.setData({
            title: options.title,
            result: "你自尊心强，处事谨慎，不喜欢在人前流露自己的感情。",
          });
        } else if (ids == 3) {
          this.setData({
            title: options.title,
            result: "你性格内向，感情丰富，爱交朋友，却不太信任他人。",
          });
        } else {
          this.setData({
            title: options.title,
            result: "你喜欢追求时髦，热情开朗，富有幽默感，容易亲信他人。",
          });
        }
      } else if (type == 3) {
        this.setData({
          img: img,
        });
        if (ids == 1) {
          this.setData({
            title: options.title,
            result: "你很主观，但为人亲切又肯付出，所以很受欢迎。",
          });
        } else if (ids == 2) {
          this.setData({
            title: options.title,
            result: "你个性单纯，很有毅力。",
          });
        } else if (ids == 3) {
          this.setData({
            title: options.title,
            result: "你简单而缺乏成熟感，但做事很努力。",
          });
        } else {
          this.setData({
            title: options.title,
            result: "你是行动派，做事干净利落。",
          });
        }
      } else if (type == 4) {
        this.setData({
          img: img,
        });
        if (ids == 1) {
          this.setData({
            title: options.title,
            result:
              "你很挑剔，是个完美主义者，常以高标准来要求自己和他人，会让人觉得你很难相处。",
          });
        } else if (ids == 2) {
          this.setData({
            title: options.title,
            result:
              "你个性非常敏感，情绪起伏很大，善变的你让朋友觉得和你相处都得小心翼翼。",
          });
        } else if (ids == 3) {
          this.setData({
            title: options.title,
            result: "你极具正义感，很爱说教，这让你的朋友感到不轻松",
          });
        } else {
          this.setData({
            title: options.title,
            result:
              "你赚钱能力很强，但是觉得赚钱很辛苦，所以要好好存钱，难免让人觉得你斤斤计较。",
          });
        }
      } else {
        this.setData({
          img: img,
        });
        if (ids == 1) {
          this.setData({
            title: options.title,
            result:
              "你具有“表演性格”，这类型的人虽然在别人眼里已经是100分了，可是自己却还希望可以做到最好，因此常会给自己无形的压力！",
          });
        } else if (ids == 2) {
          this.setData({
            title: options.title,
            result:
              "你具有“赌徒性格”，这类型的人非常强悍，觉得任何的挫折和困难都无法把自己打倒，遇到再大的挫折都能很快地站起来。",
          });
        } else if (ids == 3) {
          this.setData({
            title: options.title,
            result:
              "你具有“怀疑性格”，这类型的人需要很大的安全感，不管是金钱、工作或是成就感上，当安全感不足时就很容易得自闭症！",
          });
        } else {
          this.setData({
            title: options.title,
            result:
              "你具有“保护性格”，这类型的人公私分明，在工作的时候会尽情地发挥，可是在私下的时候希望跟家人或朋友待在被保护的空间之内，这样会感觉比较自在，可以完成自己另一个真实的身份！",
          });
        }
      }
    } else {
      if (type == 0) {
        this.setData({
          img: img,
        });
        if (ids == 1) {
          this.setData({
            title: options.title,
            result:
              "你在出外散心时巧遇到你的另一半，而且会有一段非常浪漫的恋情。",
          });
        } else if (ids == 2) {
          this.setData({
            title: options.title,
            result:
              "你将来的另一半不是你的同学、学长，就是你的同事、上司，两人在长时间的相处之下，逐渐培养出默契，进而迸出爱的火花。",
          });
        } else if (ids == 3) {
          this.setData({
            title: options.title,
            result:
              "你很可能在公开的娱乐场所认识你的另一半！而且“他（她）”一定是你第一眼就被吸引的杰出人物。",
          });
        } else {
          this.setData({
            title: options.title,
            result:
              "你的另一半很可能会在交通工具上与你相遇，所以上班的路上要特别地留意哦！",
          });
        }
      } else if (type == 1) {
        this.setData({
          img: img,
        });
        if (ids == 1) {
          this.setData({
            title: options.title,
            result:
              "你喜欢听你话的人，无论是约会还是平常相处，全部都附和你的人是你的最爱。",
          });
        } else if (ids == 2) {
          this.setData({
            title: options.title,
            result: "很在意别人看法的你，喜欢外形好的人，内涵稍差也能忍受。",
          });
        } else if (ids == 3) {
          this.setData({
            title: options.title,
            result: "你喜欢那些在精神上值得依赖、总是能够和你在一起的人。",
          });
        } else {
          this.setData({
            title: options.title,
            result: "你喜欢会调动气氛，并且能满足你好奇心的人。",
          });
        }
      } else if (type == 2) {
        this.setData({
          img: img,
        });
        if (ids == 1) {
          this.setData({
            title: options.title,
            result:
              "你现阶段最重视的是友情。朋友众多的你，总是借着手机来培养彼此间的友谊与感情，所以对你而言，没有手机就感觉自己好像不存在一样。你很相信朋友，所以你也比较不能忍受周遭好友有一丝丝的背叛。你是不是常常觉得这样很矛盾？那代表其实你内心也想寻找一个可以依靠谈心的另一半。",
          });
        } else if (ids == 2) {
          this.setData({
            title: options.title,
            result:
              "当然了，你现在最重视的一定是爱情。你和他正处于恋爱蜜月期，所以对于他的一切你总是特别珍惜。对你而言，拥有他就像拥有全世界一样，身旁的一切你会觉得毫不在乎。所以千万别因为恋爱，就忘了自己其它该做的事喔。不然等蜜月期一过，你又会开始怪东怪西啰。",
          });
        } else if (ids == 3) {
          this.setData({
            title: options.title,
            result:
              "你现在最重视的是自己。也许你正学着如何让自己独立过日子。自己租房子、自己打扫、自己煮东西……过着完全属于自己的生活。对你而言，你不希望这个小空间被外界所干扰，所以也造成你有点独来独往喔。有机会还是要跟朋友相聚才行，不然有事情可能会找不到人帮忙的。",
          });
        } else {
          this.setData({
            title: options.title,
            result:
              "你现阶段最重视的是亲情。可能是家里的感觉较温馨，或是家教比较严，所以你几乎也没什么休闲活动，有空就会呆在家里。虽然现阶段你的朋友并不多，可是也是有一两个常到家里玩的好朋友，建议有机会可以把他们约出来逛街或喝喝咖啡，这种友谊通常都是很难得的，一定要好好维持下去才行。",
          });
        }
      } else if (type == 3) {
        this.setData({
          img: img,
        });
        if (ids == 1) {
          this.setData({
            title: options.title,
            result:
              "选“找朋友的老板一起过”的你只有在喝醉时，才会忍不住展现你的骚劲儿。你的闷骚指数为40%：这类人平常都正经八百，表现得很矜持，但一旦醉了，就会把埋藏已久的骚劲表露无遗，让身边的人吃惊。",
          });
        } else if (ids == 2) {
          this.setData({
            title: options.title,
            result:
              "选“找朋友的老板一起过”的你只有在喝醉时，才会忍不住展现你的骚劲儿。你的闷骚指数为40%：这类人平常都正经八百，表现得很矜持，但一旦醉了，就会把埋藏已久的骚劲表露无遗，让身边的人吃惊。",
          });
        } else if (ids == 3) {
          this.setData({
            title: options.title,
            result:
              "选“找人妖大跳艳舞”的你平常正直矜持，只有在情人面前才会发骚。你的闷骚指数为55%：这类型的人平日为人正直诚实，只有在另一半面前才会表现内心最不为人知的一面，例如撒娇、小鸟依人等。",
          });
        } else {
          this.setData({
            title: options.title,
            result:
              "选“假扮警察临检找碴”的你是表里如一的人，要发骚也是明着发骚。你的闷骚指数为20%：这类人私底下和平日没有什么不同，即使发骚也不会去掩饰，个性自然大方。",
          });
        }
      } else if (type == 4) {
        this.setData({
          img: img,
        });
        if (ids == 1) {
          this.setData({
            title: options.title,
            result:
              "男性常常在不知不觉陷入她的露水姻缘，谱一段十分没有安全感的恋情；想躲她又躲不掉，想追她又追不到；鬼灵精型的男人早已开溜了，只剩下忠厚老实的男人一直追她到了婚姻殿堂。这样的男性在婚后非常安于家室。很少出轨，对太太很好。",
          });
        } else if (ids == 2) {
          this.setData({
            title: options.title,
            result:
              "没有足够胆识与勇气的男性，不敢和这样有才华的女强人共度一生，因此这种男性非常灵活，非常自信，能够应付各种类型的女人。在婚后，只要他愿意，便会出现各种出轨行为。他是欲望极强，出轨率非常高的精明男人",
          });
        } else if (ids == 3) {
          this.setData({
            title: options.title,
            result:
              "喜欢尤物般的男人，多半对爱情的了解并不是很透彻，只要尤物的女人能一直引诱他产生兴趣。他是相当爱情专一的男人，婚后出轨几率也不高，但是要小心他的荷包太重时，若有其他掏金的尤物引诱他，难免不会左拥右抱去了。",
          });
        } else {
          this.setData({
            title: options.title,
            result:
              "选择大家闺秀的男性，多半自识颇高，相信自己有高人一等的才能，通常选择稳定可靠职业，并且认真追求女性结婚型的人。这种男人有自大大男人心理，不准许女性婚后爱情出轨，但是自己出轨时，总是会隐藏着出轨恋情，以保持他道貌岸然的样子。",
          });
        }
      } else {
        this.setData({
          img: img,
        });
        if (ids == 1) {
          this.setData({
            title: options.title,
            result:
              "事业。为了爱情放下事业的例子世间并不少，而你也有可能成为下一位。毕竟只要自己有足够的能力就不怕找不到适合的工作，但一份好的姻缘并不是说找就能找到的。所以，一旦遇到了自己的真爱，你说什么也不会错过，即便是要放弃自己的事业也在所不惜。",
          });
        } else if (ids == 2) {
          this.setData({
            title: options.title,
            result:
              "朋友。毕竟你没有分身之术，所以当你选择恋人时，注定要冷落朋友。恋爱时的你，一有空便和恋人黏在一起，两人感情越来越好，但和朋友相处的时间则越来越少，感情也将慢慢变淡。适当的抽出点时间和朋友聚聚会或者通个电话，这都能防止因为爱情失去友情的危机。",
          });
        } else if (ids == 3) {
          this.setData({
            title: options.title,
            result:
              "自由。拥有了爱情就意味着你从今往后已不再是自由的单身贵族，很多时候你都必须要去考虑另一个人的感受。回家太晚将有人责备，花钱太多将有人追问，外出游玩也有人用电话追踪你的行踪……你从此也失去了原有的自由，许多时候都将受到爱情的束缚。",
          });
        } else {
          this.setData({
            title: options.title,
            result:
              "梦想。或许你曾经渴望能找一位王子（公主）般的伴侣，过着童话般的甜美生活。但爱情的降临却打破了你原有的美梦，不得不去面对现实的平淡。你曾经设想的浪漫故事，也随着对方的闯入使故事情节完全被颠覆。但如果你能够拋下幻想，你将能和恋人共同建立起新的梦想。",
          });
        }
      }
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
});
