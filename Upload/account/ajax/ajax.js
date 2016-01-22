function $get(object) { return document.getElementById(object); }
function $getValue(object) {return document.getElementById(object).value}
function $getChecked(object) {return document.getElementById(object).checked}
var baseName = window.location.pathname;
function exists(element) {
	"use strict";
	var e;
	e =  document.getElementById(element);
	if (e !== 'undefined' && e !== null) {
		return true;
	}
	return false;
}

var debounce = function (func, threshold, execAsap) {
    "use strict";
    var timeout;
    return function debounced() {
        var obj = this, args = arguments;
        function delayed() {
            if (!execAsap) {
				func.apply(obj, args);
			}
            timeout = null;
        }
        if (timeout) {
            clearTimeout(timeout);
		} else if (execAsap) {
            func.apply(obj, args);
		}
        timeout = setTimeout(delayed, threshold || 100);
    };
};


function getObject(id, datatype) {
	"use strict";
    var link, div;
    switch (datatype) {
        case 1:
            link = "ajax/mt_data.php?cid=" + id;
            div = "#cData";
            break;
        case 2:
            link = "ajax/mt_data.php?oid=" + id;
            div = "#oData";
            break;
        case 3:
            link = "ajax/mt_data.php?lid=" + id;
            div = "#lData";
            break;
        default:
            link = "ajax/mt_data.php?sid=" + id;
            div = "#sData";
            break;
    }

	$.ajax({
			type: "GET",
			url: link,
			cache: false,
			success: function(html){
				$(div).html(html);
			}
	});
}

function logDateTime(send) {
    var status, groupId, sourceId, campId, cvrStatus, dateBy, from, to, sortBy, dir, zone, page;

    status    = $("#statusFilter").val();
    groupId   = $("#groupFilter").val();
    sourceId  = $("#sourceFilter").val();
    campId    = $("#campaignFilter").val();
    cvrStatus = $("#cvrFilter").val();
    dateBy    = $("#datebyFilter").val();
    from      = $("#date3").val();
    to        = $("#date4").val();
    sortBy    = $("#sortby").val();
    dir       = $("#dir").val();
    zone      = $("#zoneFilter").val();
    page      = $("#page").val();

    redirectUrl = baseName+"?campaign=" + campId + "&status=" + status + "&group=" + groupId + "&source=" + sourceId;

    if (cvrStatus > 0) {
        redirectUrl += "&cs=" + cvrStatus;
    }

    if (dateBy == 9) {
		redirectUrl += "&dateby=" + dateBy + "&from=" + from + "&to=" + to;
	} else if (dateBy > 0) {
        redirectUrl += "&dateby=" + dateBy;
    }
    if (sortBy != '') {
        redirectUrl += "&sortby=" + sortBy;
    }
    if (dir != 'asc') {
        redirectUrl += "&dir=" + dir;
    }
    if (zone > 0) {
        redirectUrl += "&zone=" + zone;
    }
    if (page != 0) {
        redirectUrl += "&page=" + page;
    }
    if (dateBy != 9 || send) {
		window.location.href = redirectUrl;
	} else document.getElementById('calendar').style.display = 'inline-block';
}

function selectCampaigns(p) {
    var statusId, groupId, sourceId, campId, selectAll = null;

    statusId = $("#statusFilter").val();
    groupId  = $("#groupFilter").val();
    sourceId = $("#sourceFilter").val();
    campId   = $("#campaignFilter").val();

    if (p == 2) {
        selectAll = "&select=1";
    }

    $.ajax({
        type: "GET",
        url: "ajax/mt_camps.php",
        data: "status=" + statusId + "&group=" + groupId + "&source=" + sourceId + "&camp=" + campId + selectAll,
        cache: false,
        success: function(html){
            $("#campaignFilter").html(html);
            if (p == 1) {
                getCampaignTokens();
            }
        }
	});
}

function getCampaignTokens() {
	var campId;
    campId = $("#campaignFilter").val();

    $.ajax({
        type: "GET",
        url: "ajax/mt_camptokens.php",
        data: "camp=" + campId,
        cache: false,
        success: function(html){
            outputCampaignTokens(html);
        }
	});
	setDivWidth();
}

function setDivWidth() {
	var w, h, reportWidth;
	w = screen.width;
	h = screen.height;
	w = w - 40;
	if (exists('csvDiv')) {
		reportWidth = $("#reportWidth").val();
		if (reportWidth > w) {
            $("#csvDiv").css("width", "100%");
		}
	}
}

function outputCampaignTokens(html) {
	var i, n;
	tokenArray = new Array();
	if (html != '') {
	    tokenArray = html.split('|');
		i = 1;
		n = 0;
		for (i; i < 11; i++) {
			if (tokenArray[n] != '') {
                $("#reportLabel" + i).html(tokenArray[n]);
                $("#reportLabel" + i).show();
                $("#c" + i).show();
                $("#c" + i).val(1);
			} else {
                $("#reportLabel" + i).hide();
                $("#c" + i).prop('checked', false);
                $("#c" + i).hide();
				$("#c" + i).val(0);
			}
			n++;
		}
	}
}

function getTokens() {
    var file, n, campId;

    file = window.location.pathname;
    n = file.lastIndexOf('/');
    if (n >= 0) {
        file = file.substring(n + 1).toLowerCase();
    }

    if (file == 'settings.php') {
        $("#campaignFilter").on("change", function (event) {
            event.preventDefault();
            campId = $("#campaignFilter").val();

            $.ajax({
                type: "GET",
                url: "ajax/tokens.php",
                data: "camp=" + campId,
                cache: false,
                success: function(html){
                    $("#tokenFilter").html(html);
                }
            });
        });
    }
}

function setTokens(type) {
    var campId, sourceId, tokenType;

    tokenType = $("input:radio[name=camp_token_type]:checked").val();

    campId = $("#camp_id").val();
    sourceId = $("#source_id").val();

    $.ajax({
        type: "GET",
        url: "ajax/mt_tokens.php",
        data: "source=" + sourceId + "&camp=" + campId + "&tokenType=" + tokenType + "&type=" + type,
        cache: false,
        success: function(html){
            $("#token_fields").html(html);
            setPostbackUrl();
        }
    });
}

function setPostbackUrl() {
    var sourceId, data, pbUrl, pbMethod;
    sourceId = $("#source_id").val();

    $.ajax({
        type: "GET",
        url: "ajax/mt_pbUrl.php",
        data: "source=" + sourceId,
        cache: false,
        success: function(response){
            if (response) {
                data = response.split('|');
                pbUrl = data[0];
                pbMethod = data[1];
                $("#sourcePbUrl").val(pbUrl);
                $("#sourcePbMethod").val(pbMethod);
                if (pbUrl) {
                    $("#addSourcePostback").css("display", "inline-block");
                } else {
                    $("#addSourcePostback").hide();
                }
            }
        }
    });
}

function addSourcePostback() {
    var numPbs, pbUrl, pbMethod, added = false, n;
    numPbs = $("#nPostbacks").val();
    pbUrl = $("#sourcePbUrl").val();
    pbMethod = $("#sourcePbMethod").val();
    pbUrl = $("<div/>").html(pbUrl).text();

    for(var i=0; i < numPbs; i++) {
        if (!$.trim($("#postUrls_" + i + "_pbUrl").val()).length) {
            $("#postUrls_" + i + "_pbUrl").val(pbUrl);
            $("#postUrls_" + i + "_pbMethod").val(pbMethod);
            added = true;
            break;
        }
    }

    if (!added) {
        addPostback();
        $("#postUrls_" + numPbs + "_pbUrl").val(pbUrl);
        $("#postUrls_" + numPbs + "_pbMethod").val(pbMethod);
    }

}

function updateClicks() {
	"use strict";
	$("#updateMsg").hide();
	$("#updateMsgFill").hide();
	$("#updateImg").show();

	$.ajax({
			type: "GET",
			url: "ajax/mt_update.php",
			cache: false,
			success: function(html){
				$("#updateMsg").html(html);
				$("#updateMsgFill").hide();
				$("#updateImg").hide();
				$("#updateMsg").show();
			}
	});
}



function criteria(campId, ruleId, criteriaId, r, c, action) {
	 var dataString = "campId=" + campId + "&ruleId=" + ruleId + "&cid=" + criteriaId + "&r=" + r + "&c=" + c + "&a=" + action ;
	 $.ajax({
        type: "GET",
        url: "ajax/redirectrule.php",
        data: dataString,
        cache: false,
        success: function(html){
            criteriaAction(campId, ruleId, r, c, action, html);
            attachColorbox();
        }
	});
}

function criteriaAction(campId, ruleId, r, c, action, responseText) {
	"use strict";
	var n, j, i, criteriaWrapper, newDiv, row, count, div, rowId;
	criteriaWrapper = document.getElementById('criteriaWrapper_' + r);
	count = $('#criteriaWrapper_' + r).children().size();
	if (action === 1) {
		n = c + 1;
		j = c + 2;
		if (!exists('criteriaSelectDiv_' + r + '_' + n)) {
			document.getElementById("row_" + r + "_" + n).innerHTML = responseText;
			document.getElementById("row_" + r + "_" + n).style.display = 'block';
			document.getElementById("criteriaDelete_" + r + "_" + n).style.display = 'inline-block';
			if (count > 2) {
				$(criteriaWrapper).children().each(function () {
					if ($(this).is(":visible") && $(this).attr('id')) {
						rowId = this.id.replace('row', 'criteriaDelete');
						document.getElementById(rowId).style.display = 'inline-block';
					}
				});
			}
			newDiv = document.createElement('div');
			newDiv.setAttribute("id", "row_" + r + "_" + j);
			newDiv.setAttribute("class", "row");
			newDiv.setAttribute("style", "display:none");
			criteriaWrapper.appendChild(newDiv);
			document.getElementById("criteriaCall_" + r).setAttribute('onclick', 'criteria(' + campId + ',' + ruleId + ',0,' + r + ',' + n + ',1);return false;');
		}
	} else if (action === 0) {
		if (exists('criteriaSelectDiv_' + r + '_' + c)) {
			row = document.getElementById("row_" + r + "_" + c);
			criteriaWrapper.removeChild(row);
			count = $('#criteriaWrapper_' + r).children().size();
			if (count === 2) {
				$(criteriaWrapper).children().each(function () {
					if ($(this).is(":visible") && $(this).attr('id')) {
						rowId = this.id.replace('row', 'criteriaDelete');
						document.getElementById(rowId).style.display = 'none';
					}
				});
			}
		}
	}
}

function rule(campId, r) {
	"use strict";
	var dataString;
	dataString = "campId=" + campId + "&r=" + r;
	 $.ajax({
			type: "GET",
			url: "ajax/redirectrule.php",
			data: dataString,
			cache: false,
			success: function(html){
				ruleAction(campId, r, html);
				attachColorbox();
			}
	});
}

function ruleAction(campId, r, responseText) {
	"use strict";
	var n, j, ruleDiv, newDiv, rowId;
	ruleDiv = document.getElementById("ruleDiv");
		n = r + 1;
		j = r + 2;
		if (!exists("criteriaWrapper_" + n)) {
			document.getElementById("ruleWrapper_" + n).innerHTML = responseText;
			document.getElementById("ruleWrapper_" + n).style.display = "block";

			newDiv = document.createElement("div");
			newDiv.setAttribute("id", "ruleWrapper_" + j);
			newDiv.setAttribute("class", "ruleWrapper");
			newDiv.setAttribute("style", "display:none");
			ruleDiv.appendChild(newDiv);
			document.getElementById("ruleAdd").setAttribute("onclick", "rule(" + campId + "," + n + ");return false;");
		}
}

function setToken() {
	"use strict";
    var dataString, campId;
    campId = $("#campaignFilter").val();
    dataString = "campId=" + campId;

	$.ajax({
			type: "GET",
			url: "ajax/tokenUpdate.php",
            data: dataString,
			cache: false,
			success: function(html){
				$("#tokenSelect").html(html);
			}
	});
}

function addOffer(n) {
    var i, next, subidType, dataString;
    i = n - 1;
	next = n + 1;

    dataString = "type=1&n=" + n;

    $.ajax({
        type: "GET",
        url: "ajax/addElement.php",
        data: dataString,
        cache: false,
        success: function(html){
            $("#Offer" + n).html(html);
            $("#offer_entry").append($('<div>').attr({ id : "Offer" + next }));
            $("#insertOfferField").html('<p><a href="#" class="add_offer" onclick="addOffer(' + next + '); return false">Add Offer</a></p>');
            $("#nOffers").val(n);
        }
	});
}

function setOfferView(cid) {
    var checked, dataString;
    $('.showOffer').toggle();
    checked = 0;
    if ($('#showInactiveOffers').is(':checked')) {
        checked = 1;
    }

    dataString = "c=" + cid + "&type=1&set=" + checked;

    $.ajax({
        type: "GET",
        url: "ajax/setElement.php",
        data: dataString,
        cache: false
	});
}

function addPage(n) {
    var i, next, dataString;
    i = n - 1;
	next = n + 1;

    dataString = "type=2&n=" + n;

    $.ajax({
			type: "GET",
			url: "ajax/addElement.php",
            data: dataString,
			cache: false,
			success: function(html){
				$("#Lander" + n).html(html);
                $("#lp_entry").append($('<div>').attr({ id : "Lander" + next }));
                $("#insertLanderField").html('<p><a href="#" class="add_lander" onclick="addPage(' + next + '); return false">Add Landing Page</a></p>');
                $("#nLanders").val(n);
			}
	});
}

function setPageView(cid) {
    var checked, dataString;
    $('.showPage').toggle();
    checked = 0;
    if ($('#showInactiveLps').is(':checked')) {
        checked = 1;
    }

    dataString = "c=" + cid + "&type=2&set=" + checked;

    $.ajax({
        type: "GET",
        url: "ajax/setElement.php",
        data: dataString,
        cache: false
	});
}

function setRuleView(cid) {
    var checked, dataString;
    $('.showRule').toggle();
    checked = 0;
    if ($('#showInactiveRules').is(':checked')) {
        checked = 1;
    }

    dataString = "c=" + cid + "&type=4&set=" + checked;

    $.ajax({
        type: "GET",
        url: "ajax/setElement.php",
        data: dataString,
        cache: false
	});
}

function setLink(type) {
    $("#testBlockLink").attr({ href : "../jump/click.php?type=" + type });
}

function filterClicks(filterId, action) {
    if (action == 2) {
        $("#resultDivSub").hide();
        $("#checkingDiv").hide();
        $("#resultDiv").hide();
        $("#filteringDiv").show();
        $("#completeDiv").hide();
        $("#errorDiv").hide();
    }
    $.ajax({
        type: "GET",
        url: "filteredClicks.php",
        data: "filter=" + filterId + "&action=" + action,
        cache: false,
        success: function(html){
            if ($.isNumeric(html)) {
                if (action == 1) {
                    if (html == 0) {
                        $("#resultDivSub").hide();
                    } else {
                        $("#resultDivSub").show();
                    }
                    $("#results").html(html);
                    $("#checkingDiv").hide();
                    $("#resultDiv").show();
                    $("#filteringDiv").hide();
                    $("#completeDiv").hide();
                    $("#errorDiv").hide();
                } else if (action == 2) {
                    $("#resultDivSub").hide();
                    $("#results2").html(html);
                    $("#checkingDiv").hide();
                    $("#resultDiv").hide();
                    $("#filteringDiv").hide();
                    $("#completeDiv").show();
                    $("#errorDiv").hide();
                }
            } else {
                $("#resultDivSub").hide();
                $("#errorMsg").html(html);
                $("#checkingDiv").hide();
                $("#resultDiv").hide();
                $("#filteringDiv").hide();
                $("#completeDiv").hide();
                $("#errorDiv").show();
            }
        }
	});
}
