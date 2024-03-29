$(document).ready(function () {
  $("body").css("overflow", "hidden");
  $("html").css("overflow", "hidden");
  setTimeout(hideLoader, 4000);
  handleExpArrowAnimation();
});

function handleExpArrowAnimation() {
  $(".more-arrow").click(function (e) {
    let eleToDisplay = $(e.currentTarget).parent().find(".exp-content");
    let arrow = $(e.currentTarget).parent().find(".more-arrow i");
    console.log(eleToDisplay);
    if (eleToDisplay.hasClass("height-auto")) {
      eleToDisplay.removeClass("height-auto");
      eleToDisplay.height(`0px`)
      arrow.removeClass("rotate-arrow");
    } else {
      $(".more-arrow i").removeClass("rotate-arrow");
      $(".exp-content").removeClass("height-auto");
      eleToDisplay.addClass("height-auto");
      eleToDisplay.height(`${eleToDisplay.children().eq(0).height()}px`)
      arrow.addClass("rotate-arrow");
    }
  });
}
function hideLoader() {
  $("body").css("overflow", "auto");
  $("html").css("overflow", "auto");
  $(".loader").css("display", "none");
  var pageName = $("#page-name").text().trim();
  if (pageName == "home") {
    $(".main-content").css("display", "block", handleIndexBannerAnimation());
  }
}

function handleExperienceAnimations() {
  jobsUnderline();
}

function jobsUnderline() {
  $(".jobs-worked-in-heading hr").addClass("expand-jobs-hr");
}
function handleIndexBannerAnimation() {
  loop();

  function loop() {
    const bigarr = $(".intro-text > .to-change");
    bigarr.eq(0).animate(
      {
        opacity: "1",
      },
      1500
    );
    bigarr.eq(0).animate(
      {
        opacity: "0",
      },
      400,
      loop1
    );
  }
  function loop1() {
    const bigarr = $(".intro-text > .to-change");
    bigarr.eq(1).animate(
      {
        opacity: "1",
      },
      1500
    );
    bigarr.eq(1).animate(
      {
        opacity: "0",
      },
      400,
      loop2
    );
  }
  function loop2() {
    const bigarr = $(".intro-text > .to-change");
    bigarr.eq(2).animate(
      {
        opacity: "1",
      },
      1500
    );
    bigarr.eq(2).animate(
      {
        opacity: "0",
      },
      400,
      loop3
    );
  }
  function loop3() {
    const bigarr = $(".intro-text > .to-change");
    bigarr.eq(3).animate(
      {
        opacity: "1",
      },
      1500
    );
    bigarr.eq(3).animate(
      {
        opacity: "0",
      },
      400,
      loop4
    );
  }
  function loop4() {
    const bigarr = $(".intro-text > .to-change");
    bigarr.eq(4).animate(
      {
        opacity: "1",
      },
      1500
    );
    bigarr.eq(4).animate(
      {
        opacity: "0",
      },
      400,
      loop
    );
  }

}
