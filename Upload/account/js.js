// JavaScript Document
function $get(object) { return document.getElementById(object); }

function $getValue(object) {return document.getElementById(object).value}

function $getChecked(object) {return document.getElementById(object).checked}

var baseName = window.location.pathname;

function exists(element) {
	var e =  document.getElementById(element);
	if (typeof(e) != 'undefined' && e != null) {
	  return true;
	}
	return false;
}


function confirmFilterDelete(message, num) {
    var msg, agree;

    if (num > 0) {
        msg = message + " \n\nDeleting this filter here will move these " + num + " filtered clicks from the filtered table to the click table. This means that these clicks will now be in your stats.\n\nIf this is not what you want, click the \"edit\" link and the click \"Delete Filtered Clicks\" in the Database Maint. section first before deleting the filter.";
    } else {
        msg = message;
    }

    agree = confirm(msg);
    if (agree) {
        return true;
    } else {
        return false;
    }
}



function confirmSubmit(message)
{
var msg = message ? message : "Are you sure you wish to continue?";
var agree=confirm(msg);
if (agree)
	return true ;
else
	return false ;
}

function trim(str)
{
  return str.replace(/^\s+|\s+$/g, '');
}


function submitForm(element,form) {
	var id = element.id;
	document.getElementById('postBackLink').value = id;
	document.forms[form].submit();
}

function reportForm(sortby,dir) {
	document.getElementById('sortby').value = sortby;
	document.getElementById('dir').value = dir;
	document.forms["campaigns"].submit();
}

function submitReportForm() {
    setTimeout( function() { submitReportFormDelay(); }, 500 );
}

function submitReportFormDelay() {
	document.forms["campaigns"].submit();
}


function setAllData() {
	var set = $getChecked("allData");
	if (set) {
		document.getElementById('clickData').checked = true;
		document.getElementById('campData').checked = true;
        document.getElementById('timeData').checked = true;
		document.getElementById('optData').checked = true;
		document.getElementById('deviceData').checked = true;
		document.getElementById('carrierData').checked = true;
		document.getElementById('tokenData').checked = true;
	} else {
		document.getElementById('clickData').checked = false;
		document.getElementById('campData').checked = false;
        document.getElementById('timeData').checked = false;
		document.getElementById('optData').checked = false;
		document.getElementById('deviceData').checked = false;
		document.getElementById('carrierData').checked = false;
		document.getElementById('tokenData').checked = false;
	}
	setReportData(0, 1);
}

function setReportData(i, setAll) {
	var set;
	if (i === 1 || setAll) {
		set = $getChecked("clickData");
		if (set) {
			document.getElementById('sid').checked = true;
			document.getElementById('ip').checked = true;
			document.getElementById('ref').checked = true;
			document.getElementById('ua').checked = true;
            document.getElementById('oip').checked = true;
            document.getElementById('oua').checked = true;
		} else {
			document.getElementById('sid').checked = false;
			document.getElementById('ip').checked = false;
			document.getElementById('ref').checked = false;
			document.getElementById('ua').checked = false;
            document.getElementById('oip').checked = false;
            document.getElementById('oua').checked = false;
		}
	} 
	if (i === 2 || setAll) {
		set = $getChecked("campData");
		if (set) {
			document.getElementById('cid').checked = true;
			document.getElementById('cn').checked = true;
			document.getElementById('cpc').checked = true;
			document.getElementById('on').checked = true;
            document.getElementById('lp').checked = true;
			document.getElementById('ld').checked = true;
			document.getElementById('cv').checked = true;
			if (exists('src')) {
				document.getElementById('src').checked = true;
			}
		} else {
			document.getElementById('cid').checked = false;
			document.getElementById('cn').checked = false;
			document.getElementById('cpc').checked = false;
			document.getElementById('on').checked = false;
            document.getElementById('lp').checked = false;
			document.getElementById('ld').checked = false;
			document.getElementById('cv').checked = false;
			if (exists('src')) {
				document.getElementById('src').checked = false;
			}
		}
	}
	if (i === 3 || setAll) {
		set = $getChecked("optData");
		if (set) {
			document.getElementById('oi').checked = true;
			document.getElementById('ph').checked = true;
			document.getElementById('em').checked = true;
		} else {
			document.getElementById('oi').checked = false;
			document.getElementById('ph').checked = false;
			document.getElementById('em').checked = false;
		}
	}
	if (i === 4 || setAll) {
		set = $getChecked("deviceData");
		if (set) {
			document.getElementById('mf').checked = true;
			document.getElementById('name').checked = true;
			document.getElementById('mdl').checked = true;
			document.getElementById('mnm').checked = true;
			document.getElementById('mn').checked = true;
			document.getElementById('type').checked = true;
			document.getElementById('os').checked = true;
			document.getElementById('size').checked = true;
			document.getElementById('res').checked = true;
			document.getElementById('spd').checked = true;
            document.getElementById('traffic').checked = true;
            document.getElementById('platform').checked = true;
            document.getElementById('browser').checked = true;
		} else {
			document.getElementById('mf').checked = false;
			document.getElementById('name').checked = false;
			document.getElementById('mdl').checked = false;
			document.getElementById('mnm').checked = false;
			document.getElementById('mn').checked = false;
			document.getElementById('type').checked = false;
			document.getElementById('os').checked = false;
			document.getElementById('size').checked = false;
			document.getElementById('res').checked = false;
			document.getElementById('spd').checked = false;
            document.getElementById('traffic').checked = false;
            document.getElementById('platform').checked = false;
            document.getElementById('browser').checked = false;
		}
	}
	if (i === 5 || setAll) {
		set = $getChecked("carrierData");
		if (set) {
			document.getElementById('carrier').checked = true;
			document.getElementById('isp').checked = true;
			document.getElementById('code').checked = true;
			document.getElementById('country').checked = true;
		} else {
			document.getElementById('carrier').checked = false;
			document.getElementById('isp').checked = false;
			document.getElementById('code').checked = false;
			document.getElementById('country').checked = false;
		}
	}
	if (i === 6 || setAll) {
		set = $getChecked("tokenData");
		if (set) {
			if (document.getElementById('c1').value === "1") {
				document.getElementById('c1').checked = true;
			}
			if (document.getElementById('c2').value === "1") {
				document.getElementById('c2').checked = true;
			}
			if (document.getElementById('c3').value === "1") {
				document.getElementById('c3').checked = true;
			}
			if (document.getElementById('c4').value === "1") {
				document.getElementById('c4').checked = true;
			}
			if (document.getElementById('c5').value === "1") {
				document.getElementById('c5').checked = true;
			}
			if (document.getElementById('c6').value === "1") {
				document.getElementById('c6').checked = true;
			}
			if (document.getElementById('c7').value === "1") {
				document.getElementById('c7').checked = true;
			}
			if (document.getElementById('c8').value === "1") {
				document.getElementById('c8').checked = true;
			}
			if (document.getElementById('c9').value === "1") {
				document.getElementById('c9').checked = true;
			}
			if (document.getElementById('c10').value === "1") {
				document.getElementById('c10').checked = true;
			}
		} else {
			document.getElementById('c1').checked = false;
			document.getElementById('c2').checked = false;
			document.getElementById('c3').checked = false;
			document.getElementById('c4').checked = false;
			document.getElementById('c5').checked = false;
			document.getElementById('c6').checked = false;
			document.getElementById('c7').checked = false;
			document.getElementById('c8').checked = false;
			document.getElementById('c9').checked = false;
			document.getElementById('c10').checked = false;
		}
	}
    if (i === 7 || setAll) {
        set = $getChecked("timeData");
        if (set) {
			document.getElementById('ts').checked = true;
			document.getElementById('dt').checked = true;
            document.getElementById('ots').checked = true;
			document.getElementById('odt').checked = true;
            document.getElementById('cts').checked = true;
			document.getElementById('cdt').checked = true;
            document.getElementById('lpt').checked = true;
		} else {
			document.getElementById('ts').checked = false;
			document.getElementById('dt').checked = false;
            document.getElementById('ots').checked = false;
			document.getElementById('odt').checked = false;
            document.getElementById('cts').checked = false;
			document.getElementById('cdt').checked = false;
            document.getElementById('lpt').checked = false;
		}
    }
}

function defaultRule() {
	var set;
	set = $getChecked('defaultRule_ruleDefault');
	if (set) {
		document.getElementById('defaultRule').style.display = 'none';
	} else {
		document.getElementById('defaultRule').style.display = 'block';
	}
}

function setFilters(type) {
	if (type) {
        $("#rRange").html('Filter IP Ranges:');
        $("#rUAs").html('Filter User Agents that Contain:');
        $("#rRefs").html('Filter Referers that Contain:');
        $("#rUrl").hide();
        $("#filterUrl").hide();
	} else {
        $("#rRange").html('Block IP Ranges:');
        $("#rUAs").html('Block User Agents that Contain:');
        $("#rRefs").html('Block Referers that Contain:');
        $("#rUrl").show();
        $("#filterUrl").show();
	}
}

function criteriaType(ruleId, criteriaId, r, c) {
	var type, campId;
	type = parseInt(document.getElementById('rules_' + r + '_' + c + '_criteriaType').value);
	campId = $getValue('camp_id');

	if (type === 1) {
        document.getElementById('criteriaTokenDiv_' + r + '_' + c).style.display = 'none';
		document.getElementById('criteriaSelectDiv_' + r + '_' + c).style.display = 'none';
		document.getElementById('criteriaCarrierDiv_' + r + '_' + c).style.display = 'none';
		document.getElementById('criteriaDeviceTypeDiv_' + r + '_' + c).style.display = 'none';
		document.getElementById('criteriaMfDiv_' + r + '_' + c).style.display = 'none';
        document.getElementById('criteriaBrowserIdDiv_'+r+'_'+c).style.display = 'none';
        document.getElementById('criteriaTrafficTypeDiv_'+r+'_'+c).style.display = 'none';
        document.getElementById('criteriaPlatformIdDiv_'+r+'_'+c).style.display = 'none';
		document.getElementById('criteriaTextDiv_' + r + '_' + c).style.display = 'inline-block';
		document.getElementById('selectData_' + r + '_' + c).style.display = 'none';
		document.getElementById('criteriaData_' + r + '_' + c).innerHTML = 'Select Countries';
		document.getElementById('criteriaSelectOpt1_' + r + '_' + c).innerHTML = 'Single';
		document.getElementById('criteriaSelectOpt2_' + r + '_' + c).innerHTML = 'Multiple';
		document.getElementById('criteriaSelectOpt3_' + r + '_' + c).style.display = 'block';
	} else if (type === 2) {
        document.getElementById('criteriaTokenDiv_' + r + '_' + c).style.display = 'none';
		document.getElementById('criteriaSelectDiv_' + r + '_' + c).style.display = 'inline-block';
		document.getElementById('criteriaCarrierDiv_' + r + '_' + c).style.display = 'inline-block';
		document.getElementById('criteriaDeviceTypeDiv_' + r + '_' + c).style.display = 'none';
		document.getElementById('criteriaMfDiv_' + r + '_' + c).style.display = 'none';
        document.getElementById('criteriaBrowserIdDiv_'+r+'_'+c).style.display = 'none';
        document.getElementById('criteriaTrafficTypeDiv_'+r+'_'+c).style.display = 'none';
        document.getElementById('criteriaPlatformIdDiv_'+r+'_'+c).style.display = 'none';
		document.getElementById('criteriaTextDiv_' + r + '_' + c).style.display = 'none';
		document.getElementById('selectData_' + r + '_' + c).style.display = 'none';
		document.getElementById('criteriaData_' + r + '_' + c).innerHTML = 'Select Carriers';
		document.getElementById('criteriaSelectOpt1_' + r + '_' + c).innerHTML = 'Single (US)';
		document.getElementById('criteriaSelectOpt2_' + r + '_' + c).innerHTML = 'Multiple (US)';
		document.getElementById('criteriaSelectOpt3_'+r+'_'+c).style.display = 'block';
		criteriaSelect(r, c);
	} else if (type === 3) {
        document.getElementById('criteriaTokenDiv_' + r + '_' + c).style.display = 'none';
		document.getElementById('criteriaSelectDiv_'+r+'_'+c).style.display = 'inline-block';
		document.getElementById('criteriaCarrierDiv_'+r+'_'+c).style.display = 'none';
		document.getElementById('criteriaDeviceTypeDiv_'+r+'_'+c).style.display = 'inline-block';
		document.getElementById('criteriaMfDiv_'+r+'_'+c).style.display = 'none';
        document.getElementById('criteriaBrowserIdDiv_'+r+'_'+c).style.display = 'none';
        document.getElementById('criteriaTrafficTypeDiv_'+r+'_'+c).style.display = 'none';
        document.getElementById('criteriaPlatformIdDiv_'+r+'_'+c).style.display = 'none';
		document.getElementById('criteriaTextDiv_'+r+'_'+c).style.display = 'none';
		document.getElementById('selectData_'+r+'_'+c).style.display = 'none';
		document.getElementById('criteriaData_' + r + '_' + c).innerHTML = 'Select Types';
		document.getElementById('criteriaSelectOpt1_' + r + '_' + c).innerHTML = 'Single';
		document.getElementById('criteriaSelectOpt2_' + r + '_' + c).innerHTML = 'Multiple';
		document.getElementById('criteriaSelectOpt3_'+r+'_'+c).style.display = 'none';
		criteriaSelect(r, c);
	} else if (type === 4) {
        document.getElementById('criteriaTokenDiv_' + r + '_' + c).style.display = 'none';
		document.getElementById('criteriaSelectDiv_'+r+'_'+c).style.display = 'inline-block';
		document.getElementById('criteriaCarrierDiv_'+r+'_'+c).style.display = 'none';
		document.getElementById('criteriaDeviceTypeDiv_'+r+'_'+c).style.display = 'none';
		document.getElementById('criteriaMfDiv_'+r+'_'+c).style.display = 'inline-block';
        document.getElementById('criteriaBrowserIdDiv_'+r+'_'+c).style.display = 'none';
        document.getElementById('criteriaTrafficTypeDiv_'+r+'_'+c).style.display = 'none';
        document.getElementById('criteriaPlatformIdDiv_'+r+'_'+c).style.display = 'none';
		document.getElementById('criteriaTextDiv_'+r+'_'+c).style.display = 'none';
		document.getElementById('selectData_'+r+'_'+c).style.display = 'none';
		document.getElementById('criteriaData_' + r + '_' + c).innerHTML = 'Select Manufacturers';
		document.getElementById('criteriaSelectOpt1_' + r + '_' + c).innerHTML = 'Single';
		document.getElementById('criteriaSelectOpt2_' + r + '_' + c).innerHTML = 'Multiple';
		document.getElementById('criteriaSelectOpt3_'+r+'_'+c).style.display = 'block';
		criteriaSelect(r, c);
	} else if (type === 5) {
        document.getElementById('criteriaTokenDiv_' + r + '_' + c).style.display = 'none';
		document.getElementById('criteriaSelectDiv_'+r+'_'+c).style.display = 'none';
		document.getElementById('criteriaCarrierDiv_'+r+'_'+c).style.display = 'none';
		document.getElementById('criteriaDeviceTypeDiv_'+r+'_'+c).style.display = 'none';
		document.getElementById('criteriaMfDiv_'+r+'_'+c).style.display = 'none';
        document.getElementById('criteriaBrowserIdDiv_'+r+'_'+c).style.display = 'none';
        document.getElementById('criteriaTrafficTypeDiv_'+r+'_'+c).style.display = 'none';
        document.getElementById('criteriaPlatformIdDiv_'+r+'_'+c).style.display = 'none';
		document.getElementById('criteriaTextDiv_'+r+'_'+c).style.display = 'none';
		document.getElementById('selectData_'+r+'_'+c).style.display = 'inline-block';
		document.getElementById('criteriaData_' + r + '_' + c).innerHTML = 'Select Models';
		document.getElementById('criteriaSelectOpt1_' + r + '_' + c).innerHTML = 'Single';
		document.getElementById('criteriaSelectOpt2_' + r + '_' + c).innerHTML = 'Multiple';
		document.getElementById('criteriaSelectOpt3_'+r+'_'+c).style.display = 'block';
    } else if (type === 6) {
        document.getElementById('criteriaTokenDiv_' + r + '_' + c).style.display = 'inline-block';
        document.getElementById('criteriaSelectDiv_'+r+'_'+c).style.display = 'none';
		document.getElementById('criteriaCarrierDiv_'+r+'_'+c).style.display = 'none';
		document.getElementById('criteriaDeviceTypeDiv_'+r+'_'+c).style.display = 'none';
		document.getElementById('criteriaMfDiv_'+r+'_'+c).style.display = 'none';
        document.getElementById('criteriaBrowserIdDiv_'+r+'_'+c).style.display = 'none';
        document.getElementById('criteriaTrafficTypeDiv_'+r+'_'+c).style.display = 'none';
        document.getElementById('criteriaPlatformIdDiv_'+r+'_'+c).style.display = 'none';
		document.getElementById('criteriaTextDiv_'+r+'_'+c).style.display = 'inline-block';
		document.getElementById('selectData_'+r+'_'+c).style.display = 'none';
		document.getElementById('criteriaData_' + r + '_' + c).innerHTML = '';
		document.getElementById('criteriaSelectOpt1_' + r + '_' + c).innerHTML = 'Single';
		document.getElementById('criteriaSelectOpt2_' + r + '_' + c).innerHTML = 'Multiple';
		document.getElementById('criteriaSelectOpt3_'+r+'_'+c).style.display = 'block';
    } else if (type === 7) {
        document.getElementById('criteriaTokenDiv_' + r + '_' + c).style.display = 'none';
		document.getElementById('criteriaSelectDiv_'+r+'_'+c).style.display = 'none';
		document.getElementById('criteriaCarrierDiv_'+r+'_'+c).style.display = 'none';
		document.getElementById('criteriaDeviceTypeDiv_'+r+'_'+c).style.display = 'none';
		document.getElementById('criteriaMfDiv_'+r+'_'+c).style.display = 'none';
        document.getElementById('criteriaBrowserIdDiv_'+r+'_'+c).style.display = 'none';
        document.getElementById('criteriaTrafficTypeDiv_'+r+'_'+c).style.display = 'none';
        document.getElementById('criteriaPlatformIdDiv_'+r+'_'+c).style.display = 'none';
		document.getElementById('criteriaTextDiv_'+r+'_'+c).style.display = 'none';
		document.getElementById('selectData_'+r+'_'+c).style.display = 'inline-block';
		document.getElementById('criteriaData_' + r + '_' + c).innerHTML = 'Select IP Addresses';
		document.getElementById('criteriaSelectOpt1_' + r + '_' + c).innerHTML = 'Single';
		document.getElementById('criteriaSelectOpt2_' + r + '_' + c).innerHTML = 'Multiple';
		document.getElementById('criteriaSelectOpt3_'+r+'_'+c).style.display = 'block';
    } else if (type === 8) {
        document.getElementById('criteriaTokenDiv_' + r + '_' + c).style.display = 'none';
		document.getElementById('criteriaSelectDiv_'+r+'_'+c).style.display = 'none';
		document.getElementById('criteriaCarrierDiv_'+r+'_'+c).style.display = 'none';
		document.getElementById('criteriaDeviceTypeDiv_'+r+'_'+c).style.display = 'none';
		document.getElementById('criteriaMfDiv_'+r+'_'+c).style.display = 'none';
        document.getElementById('criteriaBrowserIdDiv_'+r+'_'+c).style.display = 'none';
        document.getElementById('criteriaTrafficTypeDiv_'+r+'_'+c).style.display = 'none';
        document.getElementById('criteriaPlatformIdDiv_'+r+'_'+c).style.display = 'none';
		document.getElementById('criteriaTextDiv_'+r+'_'+c).style.display = 'none';
		document.getElementById('selectData_'+r+'_'+c).style.display = 'inline-block';
		document.getElementById('criteriaData_' + r + '_' + c).innerHTML = 'Select Referers';
		document.getElementById('criteriaSelectOpt1_' + r + '_' + c).innerHTML = 'Single';
		document.getElementById('criteriaSelectOpt2_' + r + '_' + c).innerHTML = 'Multiple';
		document.getElementById('criteriaSelectOpt3_'+r+'_'+c).style.display = 'block';
    } else if (type === 9) {
        document.getElementById('criteriaTokenDiv_' + r + '_' + c).style.display = 'none';
		document.getElementById('criteriaSelectDiv_'+r+'_'+c).style.display = 'inline-block';
		document.getElementById('criteriaCarrierDiv_'+r+'_'+c).style.display = 'none';
		document.getElementById('criteriaDeviceTypeDiv_'+r+'_'+c).style.display = 'none';
		document.getElementById('criteriaMfDiv_'+r+'_'+c).style.display = 'none';
        document.getElementById('criteriaBrowserIdDiv_'+r+'_'+c).style.display = 'inline-block';
        document.getElementById('criteriaTrafficTypeDiv_'+r+'_'+c).style.display = 'none';
        document.getElementById('criteriaPlatformIdDiv_'+r+'_'+c).style.display = 'none';
		document.getElementById('criteriaTextDiv_'+r+'_'+c).style.display = 'none';
		document.getElementById('selectData_'+r+'_'+c).style.display = 'none';
		document.getElementById('criteriaData_' + r + '_' + c).innerHTML = 'Select Browsers';
		document.getElementById('criteriaSelectOpt1_' + r + '_' + c).innerHTML = 'Single';
		document.getElementById('criteriaSelectOpt2_' + r + '_' + c).innerHTML = 'Multiple';
		document.getElementById('criteriaSelectOpt3_'+r+'_'+c).style.display = 'none';
        criteriaSelect(r, c);
	} else if (type === 10) {
        document.getElementById('criteriaTokenDiv_' + r + '_' + c).style.display = 'none';
		document.getElementById('criteriaSelectDiv_'+r+'_'+c).style.display = 'none';
		document.getElementById('criteriaCarrierDiv_'+r+'_'+c).style.display = 'none';
		document.getElementById('criteriaDeviceTypeDiv_'+r+'_'+c).style.display = 'none';
		document.getElementById('criteriaMfDiv_'+r+'_'+c).style.display = 'none';
        document.getElementById('criteriaBrowserIdDiv_'+r+'_'+c).style.display = 'none';
        document.getElementById('criteriaTrafficTypeDiv_'+r+'_'+c).style.display = 'inline-block';
        document.getElementById('criteriaPlatformIdDiv_'+r+'_'+c).style.display = 'none';
		document.getElementById('criteriaTextDiv_'+r+'_'+c).style.display = 'none';
		document.getElementById('selectData_'+r+'_'+c).style.display = 'none';
		document.getElementById('criteriaData_' + r + '_' + c).innerHTML = 'Select Traffic';
		document.getElementById('criteriaSelectOpt1_' + r + '_' + c).innerHTML = 'Single';
		document.getElementById('criteriaSelectOpt2_' + r + '_' + c).innerHTML = 'Multiple';
		document.getElementById('criteriaSelectOpt3_'+r+'_'+c).style.display = 'block';
	} else if (type === 11) {
        document.getElementById('criteriaTokenDiv_' + r + '_' + c).style.display = 'none';
		document.getElementById('criteriaSelectDiv_'+r+'_'+c).style.display = 'inline-block';
		document.getElementById('criteriaCarrierDiv_'+r+'_'+c).style.display = 'none';
		document.getElementById('criteriaDeviceTypeDiv_'+r+'_'+c).style.display = 'none';
		document.getElementById('criteriaMfDiv_'+r+'_'+c).style.display = 'none';
        document.getElementById('criteriaBrowserIdDiv_'+r+'_'+c).style.display = 'none';
        document.getElementById('criteriaTrafficTypeDiv_'+r+'_'+c).style.display = 'none';
        document.getElementById('criteriaPlatformIdDiv_'+r+'_'+c).style.display = 'inline-block';
		document.getElementById('criteriaTextDiv_'+r+'_'+c).style.display = 'none';
		document.getElementById('selectData_'+r+'_'+c).style.display = 'none';
		document.getElementById('criteriaData_' + r + '_' + c).innerHTML = 'Select Platforms';
		document.getElementById('criteriaSelectOpt1_' + r + '_' + c).innerHTML = 'Single';
		document.getElementById('criteriaSelectOpt2_' + r + '_' + c).innerHTML = 'Multiple';
		document.getElementById('criteriaSelectOpt3_'+r+'_'+c).style.display = 'none';
        criteriaSelect(r, c);
	} else if (type === 12) {
        document.getElementById('criteriaTokenDiv_' + r + '_' + c).style.display = 'none';
		document.getElementById('criteriaSelectDiv_' + r + '_' + c).style.display = 'none';
		document.getElementById('criteriaCarrierDiv_' + r + '_' + c).style.display = 'none';
		document.getElementById('criteriaDeviceTypeDiv_' + r + '_' + c).style.display = 'none';
		document.getElementById('criteriaMfDiv_' + r + '_' + c).style.display = 'none';
        document.getElementById('criteriaBrowserIdDiv_'+r+'_'+c).style.display = 'none';
        document.getElementById('criteriaTrafficTypeDiv_'+r+'_'+c).style.display = 'none';
        document.getElementById('criteriaPlatformIdDiv_'+r+'_'+c).style.display = 'none';
		document.getElementById('criteriaTextDiv_' + r + '_' + c).style.display = 'inline-block';
		document.getElementById('selectData_' + r + '_' + c).style.display = 'none';
		document.getElementById('criteriaData_' + r + '_' + c).innerHTML = 'Select OS';
		document.getElementById('criteriaSelectOpt1_' + r + '_' + c).innerHTML = 'Single';
		document.getElementById('criteriaSelectOpt2_' + r + '_' + c).innerHTML = 'Multiple';
		document.getElementById('criteriaSelectOpt3_' + r + '_' + c).style.display = 'block';
	} else {
        document.getElementById('criteriaTokenDiv_' + r + '_' + c).style.display = 'none';
		document.getElementById('criteriaSelectDiv_'+r+'_'+c).style.display = 'none';
		document.getElementById('criteriaCarrierDiv_'+r+'_'+c).style.display = 'none';
		document.getElementById('criteriaDeviceTypeDiv_'+r+'_'+c).style.display = 'none';
		document.getElementById('criteriaMfDiv_'+r+'_'+c).style.display = 'none';
        document.getElementById('criteriaBrowserIdDiv_'+r+'_'+c).style.display = 'none';
        document.getElementById('criteriaTrafficTypeDiv_'+r+'_'+c).style.display = 'none';
        document.getElementById('criteriaPlatformIdDiv_'+r+'_'+c).style.display = 'none';
		document.getElementById('criteriaTextDiv_'+r+'_'+c).style.display = 'inline-block';
		document.getElementById('selectData_'+r+'_'+c).style.display = 'none';
		document.getElementById('criteriaData_' + r + '_' + c).innerHTML = '';
		document.getElementById('criteriaSelectOpt1_' + r + '_' + c).innerHTML = 'Single';
		document.getElementById('criteriaSelectOpt2_' + r + '_' + c).innerHTML = 'Multiple';
		document.getElementById('criteriaSelectOpt3_'+r+'_'+c).style.display = 'block';
	}
    if (type === 7) {
        document.getElementById('criteriaData_' + r + '_' + c).setAttribute('href', 'ajax/ips.php?campId=' + campId + '&ruleId=' + ruleId + '&cid=' + criteriaId + '&t=' + type + '&r=' + r + '&c=' + c);
        document.getElementById('criteriaData_' + r + '_' + c).setAttribute('class', 'iframeRef1 cboxElement');
    } else if (type === 8) {
        document.getElementById('criteriaData_' + r + '_' + c).setAttribute('href', 'ajax/refs.php?campId=' + campId + '&ruleId=' + ruleId + '&cid=' + criteriaId + '&t=' + type + '&r=' + r + '&c=' + c);
        document.getElementById('criteriaData_' + r + '_' + c).setAttribute('class', 'iframeRef2 cboxElement');
    } else if (type === 9) {
        document.getElementById('criteriaData_' + r + '_' + c).setAttribute('href', 'ajax/criteria.php?campId=' + campId + '&ruleId=' + ruleId + '&cid=' + criteriaId + '&t=' + type + '&r=' + r + '&c=' + c);
        document.getElementById('criteriaData_' + r + '_' + c).setAttribute('class', 'iframe cboxElement');
    } else if (type === 11) {
        document.getElementById('criteriaData_' + r + '_' + c).setAttribute('href', 'ajax/criteria.php?campId=' + campId + '&ruleId=' + ruleId + '&cid=' + criteriaId + '&t=' + type + '&r=' + r + '&c=' + c);
        document.getElementById('criteriaData_' + r + '_' + c).setAttribute('class', 'iframe cboxElement');
    } else {
        document.getElementById('criteriaData_' + r + '_' + c).setAttribute('href', 'ajax/criteria.php?campId=' + campId + '&ruleId=' + ruleId + '&cid=' + criteriaId + '&t=' + type + '&r=' + r + '&c=' + c);
        document.getElementById('criteriaData_' + r + '_' + c).setAttribute('class', 'iframe cboxElement');
    }
    attachColorbox();
}

function setMatchType(ruleId, criteriaId, r, c) {
	var matchType;
	matchType = parseInt(document.getElementById('rules_' + r + '_' + c + '_matchType').value);

	if (matchType === 2) {
		document.getElementById('criteriaSelectOpt1_' + r + '_' + c).innerHTML = 'Single';
		document.getElementById('criteriaSelectOpt2_' + r + '_' + c).innerHTML = 'Multiple';
		document.getElementById('criteriaSelectDiv_'+r+'_'+c).style.display = 'none';
		document.getElementById('selectData_'+r+'_'+c).style.display = 'none';
		document.getElementById('criteriaTextDiv_'+r+'_'+c).style.display = 'inline-block';
	} else {
		criteriaType(ruleId, criteriaId, r, c);
	}
}

function criteriaSelect(r, c) {
	var preset, type;
	preset = parseInt(document.getElementById('rules_' + r + '_' + c + '_criteriaSelect').value);
	type = parseInt(document.getElementById('rules_' + r + '_' + c + '_criteriaType').value);

	if (type === 2) {
		if (preset === 1) {
			document.getElementById('criteriaCarrierDiv_' + r + '_' + c).style.display = 'inline-block';
			document.getElementById('criteriaTextDiv_' + r + '_' + c).style.display = 'none';
			document.getElementById('selectData_' + r + '_' + c).style.display = 'none';
		} else if (preset === 2) {
			document.getElementById('criteriaCarrierDiv_' + r + '_' + c).style.display = 'none';
			document.getElementById('criteriaTextDiv_' + r + '_' + c).style.display = 'none';
			document.getElementById('selectData_' + r + '_' + c).style.display = 'inline-block';
		} else {
			document.getElementById('criteriaCarrierDiv_' + r + '_' + c).style.display = 'none';
			document.getElementById('criteriaTextDiv_' + r + '_' + c).style.display = 'inline-block';
			document.getElementById('selectData_' + r + '_' + c).style.display = 'none';
		}
	} else if (type === 3) {
		if (preset === 1) {
			document.getElementById('criteriaDeviceTypeDiv_' + r + '_' + c).style.display = 'inline-block';
			document.getElementById('criteriaTextDiv_' + r + '_' + c).style.display = 'none';
			document.getElementById('selectData_' + r + '_' + c).style.display = 'none';
		} else if (preset === 2) {
			document.getElementById('criteriaDeviceTypeDiv_' + r + '_' + c).style.display = 'none';
			document.getElementById('criteriaTextDiv_' + r + '_' + c).style.display = 'none';
			document.getElementById('selectData_' + r + '_' + c).style.display = 'inline-block';
		} else {
			document.getElementById('rules_' + r + '_' + c + '_criteriaSelect').value = 1;
			document.getElementById('criteriaDeviceTypeDiv_' + r + '_' + c).style.display = 'inline-block';
			document.getElementById('criteriaTextDiv_' + r + '_' + c).style.display = 'none';
			document.getElementById('selectData_' + r + '_' + c).style.display = 'none';
		}
	} else if (type === 4) {
		if (preset === 1) {
			document.getElementById('criteriaMfDiv_' + r + '_' + c).style.display = 'inline-block';
			document.getElementById('criteriaTextDiv_' + r + '_' + c).style.display = 'none';
			document.getElementById('selectData_' + r + '_' + c).style.display = 'none';
		} else if (preset === 2) {
			document.getElementById('criteriaMfDiv_' + r + '_' + c).style.display = 'none';
			document.getElementById('criteriaTextDiv_' + r + '_' + c).style.display = 'none';
			document.getElementById('selectData_' + r + '_' + c).style.display = 'inline-block';
		} else {
			document.getElementById('criteriaMfDiv_' + r + '_' + c).style.display = 'none';
			document.getElementById('criteriaTextDiv_' + r + '_' + c).style.display = 'inline-block';
			document.getElementById('selectData_' + r + '_' + c).style.display = 'none';
		}
	} else if (type === 9) {
		if (preset === 1) {
			document.getElementById('criteriaBrowserIdDiv_' + r + '_' + c).style.display = 'inline-block';
			document.getElementById('criteriaTextDiv_' + r + '_' + c).style.display = 'none';
			document.getElementById('selectData_' + r + '_' + c).style.display = 'none';
		} else if (preset === 2) {
			document.getElementById('criteriaBrowserIdDiv_' + r + '_' + c).style.display = 'none';
			document.getElementById('criteriaTextDiv_' + r + '_' + c).style.display = 'none';
			document.getElementById('selectData_' + r + '_' + c).style.display = 'inline-block';
		} else {
			document.getElementById('rules_' + r + '_' + c + '_criteriaSelect').value = 1;
			document.getElementById('criteriaBrowserIdDiv_' + r + '_' + c).style.display = 'inline-block';
			document.getElementById('criteriaTextDiv_' + r + '_' + c).style.display = 'none';
			document.getElementById('selectData_' + r + '_' + c).style.display = 'none';
		}
	} else if (type === 11) {
		if (preset === 1) {
			document.getElementById('criteriaPlatformIdDiv_' + r + '_' + c).style.display = 'inline-block';
			document.getElementById('criteriaTextDiv_' + r + '_' + c).style.display = 'none';
			document.getElementById('selectData_' + r + '_' + c).style.display = 'none';
		} else if (preset === 2) {
			document.getElementById('criteriaPlatformIdDiv_' + r + '_' + c).style.display = 'none';
			document.getElementById('criteriaTextDiv_' + r + '_' + c).style.display = 'none';
			document.getElementById('selectData_' + r + '_' + c).style.display = 'inline-block';
		} else {
			document.getElementById('rules_' + r + '_' + c + '_criteriaSelect').value = 1;
			document.getElementById('criteriaPlatformIdDiv_' + r + '_' + c).style.display = 'inline-block';
			document.getElementById('criteriaTextDiv_' + r + '_' + c).style.display = 'none';
			document.getElementById('selectData_' + r + '_' + c).style.display = 'none';
		}
	} else {
		if (preset === 1) {
			document.getElementById('criteriaTextDiv_' + r + '_' + c).style.display = 'none';
			document.getElementById('selectData_' + r + '_' + c).style.display = 'none';
		} else if (preset === 2) {
			document.getElementById('criteriaTextDiv_' + r + '_' + c).style.display = 'none';
			document.getElementById('selectData_' + r + '_' + c).style.display = 'none';
		} else {
			document.getElementById('criteriaTextDiv_' + r + '_' + c).style.display = 'none';
			document.getElementById('selectData_' + r + '_' + c).style.display = 'none';
		}
	}
}

function insertPathLander(i,o) {
	var p = i+1;
	var next = o+1;
	var newHTML = '';

	newHTML += '<div class="_entry">';
	newHTML += '<div class="row">';
	newHTML += '<p class="label_left">Page Name:</p>';
	newHTML += '<input type="text" class="medium" id="pages['+i+']['+o+'][lp_name]" name="pages['+i+']['+o+'][lp_name]" onblur="clearStyle(this)" value="">';
	newHTML += '<p class="label_right">Split: %</p>';
	newHTML += '<input type="text" class="short" id="pages['+i+']['+o+'][lp_weight]" name="pages['+i+']['+o+'][lp_weight]" onblur="checkWeight(this)" value="0">';
	newHTML += '<input name="pages['+i+']['+o+'][lp_id]" type="hidden" value="">';
	newHTML += '<input name="pages['+i+']['+o+'][lp_number]" type="hidden" value="'+p+'">';
	newHTML += '<input name="pages['+i+']['+o+'][lp_option]" type="hidden" value="'+o+'">';
	newHTML += '</div>';
	newHTML += '<div class="row">';
	newHTML += '<p class="label_left">Page URL:</p>';
	newHTML += '<input type="text" class="medium" id="pages['+i+']['+o+'][lp_url]" name="pages['+i+']['+o+'][lp_url]" onblur="clearStyle(this)" value="">';
	newHTML += '<input type="checkbox" class="check_right" id="pages['+i+']['+o+'][lp_inactive]" name="pages['+i+']['+o+'][lp_inactive]" value="1" onclick="shade('+i+',3,'+o+')">';
	newHTML += '<p class="label_active">Inactive</p>';
	newHTML += '</div>';
	newHTML += '</div>';

	document.getElementById('Page'+i+'_'+o).innerHTML = newHTML;
	var lpContainer = document.getElementById('Page'+p);
	var newDiv = document.createElement('div');
	newDiv.setAttribute("id", 'Page'+i+'_'+next);
	lpContainer.appendChild(newDiv);
	document.getElementById('insertPathLander'+p).innerHTML = '<p><a href="#" class="add_lander" onclick="insertPathLander('+i+','+next+'); return false">Add Landing Page</a></p>';
	var nPages = document.getElementById('nPages'+p);
	nPages.setAttribute("value", next);
	
}


function insertField(type,n) {
	var i = n-1;
	var next = n+1;
	var newHTML = '';
	var newHtmlBtn = '';
	var networks = $get('networkStr');

	if (type == 1) {
		newHTML += '<input name="offers['+i+'][offer_id]" type="hidden" value="">';
		newHTML += '<input name="offers['+i+'][offer_number]" type="hidden" value="'+n+'">';

		newHTML += '<div class="_entry">';
		newHTML += '<div class="row">';
		newHTML += '<p class="label_left">Offer '+n+':</p>';
		newHTML += '<input type="text" class="campaignEditUrl" id="offers['+i+'][offer_name]" name="offers['+i+'][offer_name]" onblur="clearStyle(this)" value="">';
		newHTML += '<p class="label_right">Payout: $</p>';
		newHTML += '<input type="text" class="short" id="offers['+i+'][offer_payout]" name="offers['+i+'][offer_payout]" onblur="clearStyle(this)" value="">';
		newHTML += '</div>';

		newHTML += '<div class="row">';
		newHTML += '<p class="label_left">Offer '+n+' URL:</p>';
		newHTML += '<input type="text" class="campaignEditUrl" id="offers['+i+'][offer_url]" name="offers['+i+'][offer_url]" onblur="clearStyle(this)" value="">';
		newHTML += '<p class="label_right">Split: %</p>';
		newHTML += '<input type="text" class="short" id="offers['+i+'][offer_weight]" name="offers['+i+'][offer_weight]" onblur="checkWeight(this)" value="0">';
		newHTML += '</div>';

		newHTML += '<div class="row">';
		newHTML += '<p class="label_network">Aff. Network:</p>';
		newHTML += '<select id="offers['+i+'][network_id]" name="offers['+i+'][network_id]">';
		newHTML += '<option value="0">Unassigned</option>';

		if (networks != null) {
			networkArray = new Array();
			var num = 0;
        	var network = networks.value.split('|');
        	for(ii=0; ii<network.length; ii++) {
            	var data = network[ii].split(',');
            	if (data.length==2) {
					networkArray[num] = {'network_id':data[0],'network_name':data[1]};
                	num++;
				}
			}
			for(ii=0; ii<networkArray.length; ii++) {
				newHTML += '<option value="'+networkArray[ii]["network_id"]+'">'+networkArray[ii]["network_name"]+'</option>';
			}
		}
		var subidField = 'subidField'+i;
		newHTML += '</select>';
		newHTML += '<input type="checkbox" class="check" id="offers['+i+'][offer_inactive]" name="offers['+i+'][offer_inactive]" value="1" onclick="shade('+i+',1)">';
		newHTML += '<p class="label_offerActive">Inactive</p>';
        newHTML += '<input type="checkbox" class="check" id="offers['+i+'][offer_delete]" name="offers['+i+'][offer_delete]" value="1" style="margin-left: 0">';
		newHTML += '<p class="label_offerActive">Delete on Update</p>';
		newHTML += '<div id="'+subidField+'" style="display:none; margin:0 0 0 0">';
		newHTML += '<p class="label_right">Subid Field: </p>';
		newHTML += '<input type="text" class="short" id="offers['+i+'][offer_subid_field]" name="offers['+i+'][offer_subid_field]" value="">';
		newHTML += '</div>';
		newHTML += '</div>';

		newHTML += '</div>';
		
		document.getElementById('Offer'+n).innerHTML = newHTML;
		var offerContainer = document.getElementById('offer_entry');
		var newDiv = document.createElement('div');
		newDiv.setAttribute("id", "Offer"+next);
		offerContainer.appendChild(newDiv);
		document.getElementById('insertOfferField').innerHTML = '<p><a href="#" class="add_offer" onclick="insertField(1,'+next+'); return false">Add Offer</a></p>';
		var nOffers = document.getElementById('nOffers');
		nOffers.setAttribute("value", n);

	} else if (type ==2) {
		newHTML += '<div class="_entry">';

		newHTML += '<div class="row">';
		newHTML += '<p class="label_left">LP '+n+' Name:</p>';
		newHTML += '<input type="text" class="campaignEditUrl" id="landers['+i+'][lp_name]" name="landers['+i+'][lp_name]" onblur="clearStyle(this)" value="">';
		newHTML += '<p class="label_right">Split: %</p>';
		newHTML += '<input type="text" class="short" id="landers['+i+'][lp_weight]" name="landers['+i+'][lp_weight]" onblur="checkWeight(this)" value="0">';
		newHTML += '<input name="landers['+i+'][lp_id]" type="hidden" value="">';
		newHTML += '</div>';

		newHTML += '<div class="row">';
		newHTML += '<p class="label_left">LP '+n+' URL:</p>';
		newHTML += '<input type="text" class="campaignEditUrl" id="landers['+i+'][lp_url]" name="landers['+i+'][lp_url]" onblur="clearStyle(this)" value="">';
		newHTML += '<input type="checkbox" class="check_right" id="landers['+i+'][lp_inactive]" name="landers['+i+'][lp_inactive]" value="1" onclick="shade('+i+',2)">';
		newHTML += '<p class="label_active">Inactive</p>';
		newHTML += '</div>';

		newHTML += '</div>';

		document.getElementById('Lander'+n).innerHTML = newHTML;
		var landerContainer = document.getElementById('lp_entry');
		var newDiv = document.createElement('div');
		newDiv.setAttribute("id", "Lander"+next);
		landerContainer.appendChild(newDiv);
		document.getElementById('insertLanderField').innerHTML = '<p><a href="#" class="add_lander" onclick="insertField(2,'+next+'); return false">Add Landing Page</a></p>';
		var nLanders = document.getElementById('nLanders');
		nLanders.setAttribute("value", n);
	} else if (type ==3) {
		newHTML += '<input id="nPages'+n+'" type="hidden" value="2">';
		newHTML += '<h5>Landing Page '+n+'</h5>';

		newHTML += '<div id="Page'+i+'_0">';
		newHTML += '<div class="_entry">';
		newHTML += '<div class="row">';
		newHTML += '<p class="label_left">Page Name:</p>';
		newHTML += '<input type="text" class="campaignEditUrl" id="pages['+i+'][0][lp_name]" name="pages['+i+'][0][lp_name]" onblur="clearStyle(this)" value="">';
        newHTML += '</div>';
        newHTML += '<div class="row">';
		newHTML += '<p class="label_left">Page URL:</p>';
		newHTML += '<input type="text" class="campaignEditUrl" id="pages['+i+'][0][lp_url]" name="pages['+i+'][0][lp_url]" onblur="clearStyle(this)" value="">';
        newHTML += '</div>';
        newHTML += '<div class="row">';
		newHTML += '<p class="label_left">Split: %</p>';
		newHTML += '<input type="text" class="short" id="pages['+i+'][0][lp_weight]" name="pages['+i+'][0][lp_weight]" onblur="checkWeight(this)" value="0">';
		newHTML += '<input name="pages['+i+'][0][lp_id]" type="hidden" value="">';
		newHTML += '<input name="pages['+i+'][0][lp_number]" type="hidden" value="'+n+'">';
		newHTML += '<input name="pages['+i+'][0][lp_option]" type="hidden" value="0">';
		newHTML += '<input type="checkbox" class="check_right" id="pages['+i+'][0][lp_inactive]" name="pages['+i+'][0][lp_inactive]" value="1" onclick="shade('+i+',3,0)">';
		newHTML += '<p class="label_active">Inactive</p>';
		newHTML += '</div>';
		newHTML += '</div>';
		newHTML += '</div>';
		
		newHTML += '<div id="Page'+i+'_1">';
		newHTML += '<div class="_entry">';
		newHTML += '<div class="row">';
		newHTML += '<p class="label_left">Page Name:</p>';
		newHTML += '<input type="text" class="campaignEditUrl" id="pages['+i+'][1][lp_name]" name="pages['+i+'][1][lp_name]" onblur="clearStyle(this)" value="">';
        newHTML += '</div>';
        newHTML += '<div class="row">';
        newHTML += '<p class="label_left">Page URL:</p>';
		newHTML += '<input type="text" class="campaignEditUrl" id="pages['+i+'][1][lp_url]" name="pages['+i+'][1][lp_url]" onblur="clearStyle(this)" value="">';
        newHTML += '</div>';
		newHTML += '<p class="label_left">Split: %</p>';
		newHTML += '<input type="text" class="short" id="pages['+i+'][1][lp_weight]" name="pages['+i+'][1][lp_weight]" onblur="checkWeight(this)" value="0">';
		newHTML += '<input name="pages['+i+'][1][lp_id]" type="hidden" value="">';
		newHTML += '<input name="pages['+i+'][1][lp_number]" type="hidden" value="'+n+'">';
		newHTML += '<input name="pages['+i+'][1][lp_option]" type="hidden" value="1">';
		newHTML += '<input type="checkbox" class="check_right" id="pages['+i+'][1][lp_inactive]" name="pages['+i+'][1][lp_inactive]" value="1" onclick="shade('+i+',3,1)">';
		newHTML += '<p class="label_active">Inactive</p>';
		newHTML += '</div>';
		newHTML += '</div>';
		newHTML += '</div>';
		newHTML += '<div id="Page'+i+'_2"></div>';


		newHtmlBtn += '<div id="insertPathLander'+n+'" class="insertPathLander"><p><a href="#" class="add_lander" onclick="insertPathLander('+i+',2); return false">Add Landing Page</a></p></div>';
		newHtmlBtn += '<p class="wt"><a href="#" onclick="setEqualWeight(3,'+i+');return false"><img src="../images/equal.gif" width="23" height="16" alt="equal" /></a></p>';
		
		var newHtmlDiv = '<div id="Page'+next+'" class="clearLeft"></div><!-- Next Page clo';

		document.getElementById('Page'+n).innerHTML = newHTML;
		$('#path_entry').append(newHtmlBtn);
		$('#path_entry').append(newHtmlDiv);
		document.getElementById('insertPageField').innerHTML = '<p><a href="#" class="add_page" onclick="insertField(3,'+next+'); return false">Add Landing Page</a></p>';
		var nPages = document.getElementById('nPages');
		nPages.setAttribute("value", n);
		
	}
}

function addPixel() {
    var i, n, newDivId, newDiv;
    i = $("#nPixels").val();
	n = (i * 1) + 1;// sets as int

	newHTML = '<div class="_entry" style="margin-bottom: 10px;">';
	newHTML += '<div class="row">';
    newHTML += '<select id="pixelUrls_' + i + '_pbMethod" name="pixelUrls['+ i +'][pbMethod]" class="post top" style="margin-right:9px;">';
    newHTML += '<option value="3" selected="selected">Image</option>';
    newHTML += '<option value="4" >iFrame</option>';
    newHTML += '<option value="5" >Javascript</option>';
    newHTML += '</select>';
    newHTML += '<textarea rows="4" class="pburl" id="pixelUrls_' + i + '_pbUrl" name="pixelUrls['+ i +'][pbUrl]"></textarea>';
	newHTML += '<input name="pixelUrls['+ i +'][pbId]" type="hidden" value="">';
	newHTML += '</div>';
	newHTML += '</div>';

    $("#Pixel" + i).html(newHTML);
    newDiv = $("<div>", {id: 'Pixel' + n});
    $("#addPixel").append(newDiv);
    $("#nPixels").attr("value", n);
}

function addPostback() {
    var i, n, newDivId, newDiv;
    i = $("#nPostbacks").val();
	n = (i * 1) + 1;// sets as int

	newHTML = '<div class="_entry" style="margin-bottom: 10px;">';
	newHTML += '<div class="row">';
    newHTML += '<select id="postUrls_' + i + '_pbMethod" name="postUrls['+ i +'][pbMethod]" class="post" style="margin-right:9px;">';
    newHTML += '<option value="1" selected="selected">GET</option>';
    newHTML += '<option value="2" >POST</option>';
    newHTML += '</select>';
	newHTML += '<input type="text" class="pburl" id="postUrls_' + i + '_pbUrl" name="postUrls['+i+'][pbUrl]" style="font-size:12px; padding:3px; display: inline-block;" value="">';
	newHTML += '<input name="postUrls['+i+'][pbId]" type="hidden" value="">';
	newHTML += '</div>';
	newHTML += '</div>';

    $("#Postback" + i).html(newHTML);
    newDiv = $("<div>", {id: 'Postback' + n});
    $("#addPostback").append(newDiv);
    $("#nPostbacks").attr("value", n);
}

function viewTokens(bool,sid) {
	var sID = sid;
	if (bool == 'true') {
		document.getElementById('hide'+sID).style.display = 'block';
		document.getElementById('view'+sID).style.display = 'none';
		document.getElementById('src_tokens'+sID).style.display = 'block';
	} else {
		document.getElementById('hide'+sID).style.display = 'none';
		document.getElementById('view'+sID).style.display = 'block';
		document.getElementById('src_tokens'+sID).style.display = 'none';
	}
}

function showTokens(bool) { 
	if (bool == 'true') { 
		document.getElementById('token_entry').style.display = 'block';
	} else {
		document.getElementById('token_entry').style.display = 'none';
	}
}

function cType(int) {
	if (int === 0) {
        $("#campaignLPs").hide();
        $("#campaignPath").hide();
        $("#path_entry_footer").hide();
	} else if (int === 1) {
        $("#campaignLPs").show();
        $("#campaignPath").hide();
        $("#path_entry_footer").hide();
	} else if (int === 2) {
        $("#campaignLPs").hide();
        $("#campaignPath").show();
        $("#path_entry_footer").show();
	}
}

function tokenType(int) {
	"use strict";
	if (int === 0) {
		document.getElementById('custom_tokens').style.display = 'none';
	} else if (int === 1) {
		document.getElementById('custom_tokens').style.display = 'block';
	} else if (int === 2) {
		document.getElementById('custom_tokens').style.display = 'none';
	}
}


function useTokens(int) {
	if (int === 0) {
        $("#use_tokens").hide();
        $("#custom_tokens").hide();
		document.campaign.camp_subid_type[0].checked=true;
	} else {
        $("#use_tokens").show();
        $("#custom_tokens").show();
	}
}

function select_field(element) {
    element.focus();
    element.select();
}

function clearStyle(element) {
	element.style.backgroundColor = '#FFFFFF';
	element.style.borderColor = '#848484';
}


function buildReportQueryString() {
    var statusId, groupId, sourceId, campId, dateBy, zone, sortby, dir, from, to, queryStr = '';

    statusId = $("#statusFilter").val();
    groupId  = $("#groupFilter").val();
    sourceId = $("#sourceFilter").val();
    campId   = $("#campaignFilter").val();
    dateBy   = $("#datebyFilter").val();
	zone     = $("#zoneFilter").val();
	sortby   = $("#sortby").val();
	dir      = $("#dir").val();
	from     = $("#date3").val();
	to       = $("#date4").val();

    campId   = campId * 1;
    statusId = statusId * 1;
    groupId  = groupId * 1;
    sourceId = sourceId * 1;
    dateBy   = dateBy * 1;
	zone     = zone * 1;

    if (campId > 0) {
        queryStr += "?campaign=" + campId;
    }

    if (statusId != 0) {
        if (queryStr) {
            queryStr += "&status=" + statusId;
        } else {
            queryStr += "?status=" + statusId;
        }
    }

    if (groupId > -1) {
        if (queryStr) {
            queryStr += "&group=" + groupId;
        } else {
            queryStr += "?group=" + groupId;
        }
    }

    if (sourceId > -1) {
        if (queryStr) {
            queryStr += "&source=" + sourceId;
        } else {
            queryStr += "?source=" + sourceId;
        }
    }

    if (dateBy > 0) {
        if (queryStr) {
            queryStr += "&dateby=" + dateBy;
        } else {
            queryStr += "?dateby=" + dateBy;
        }
        if (dateBy == 9) {
            queryStr += "&from=" + from + "&to=" + to;
        }
    }

    if (zone > 0) {
        if (queryStr) {
            queryStr += "&zone=" + zone;
        } else {
            queryStr += "?zone=" + zone;
        }
    }

    if (sortby != '') {
        if (queryStr) {
            queryStr += "&sortby=" + sortby + "&dir=" + dir;
        } else {
            queryStr += "?sortby=" + sortby + "&dir=" + dir;
        }
    }

    return queryStr;
}

function selectCampaign() {
    var queryStr;

    queryStr = buildReportQueryString();

	redirect(queryStr);
}

function redirect(queryStr) {
    window.location.href = baseName +  queryStr;
}

function selectFilterReport(send) {
    var dateBy, filterId, reportNum, queryStr;

    dateBy     = $("#datebyFilter").val();
    filterId   = $("#filterId").val();
    reportNum  = $("#reportNum").val();

    dateBy   = dateBy * 1;
    filterId = filterId * 1;

    if (dateBy != 9 || send) {
        queryStr = buildReportQueryString();

        if (filterId > 0) {
            if (queryStr) {
                queryStr += "&filter=" + filterId;
            } else {
                queryStr = "?filter=" + filterId;
            }
        }

        if (queryStr) {
            queryStr += "&report=" + reportNum;
        } else {
            if (reportNum == 2) {
                queryStr = "?report=" + reportNum;
            }
        }

        redirect(queryStr);
    } else {
        $("#calendar").show();
    }
}

function CampaignsFilter(send,set,aName) {
    setTimeout( function() { CampaignsFilterDelay(send,set,aName); }, 500 );
}
function CampaignsFilterDelay(send,set,aName) {
	if (aName) {aName='#'+aName} else aName = '#1';;
	var restrictNumbers = 0;
	if (exists("restrictStats")) restrictNumbers = $getChecked("restrictStats");
	if (restrictNumbers) {
		if (exists("oNum")) {var oNum = $getValue("oNum");} else var oNum=0;
		if (exists("lNum")) {var lNum = $getValue("lNum");} else var lNum=0;
	} else {var oNum=0;var lNum=0;}

	if (exists("restrictSubids")) {var subids = $getChecked("restrictSubids");} else var subids=0;
	if (exists("useCpc")) {var cpcs = $getChecked("useCpc");} else var cpcs=0;
	if (exists("useValues")) {var values = $getChecked("useValues");} else var values=0;
    if (exists("useCrTime")) {var cvrTime = $getChecked("useCrTime");} else var cvrTime=0;
	if (exists("showAll")) {var showAll = $getChecked("showAll");} else var showAll=0;
    if (exists("splitType")) {var split = $('input:radio[name=split]:checked').val();} else var split=0;
	
	var statusType = $getValue("status");
	var group = $getValue("groupId");
	var source = $getValue("sourceId");
	var campId = $getValue("campaignId");
	var groupbyFilter1 = $get("groupbyFilter1");
	var groupbyFilter2 = $get("groupbyFilter2");
	var groupbyFilter3 = $get("groupbyFilter3");
	var datebyFilter = $get("datebyFilter");
	var zoneFilter = $get("zoneFilter");
	var sortby = $getValue("sortby");
	var dir = $getValue("dir");
	var from = $getValue("date3");
	var to = $getValue("date4");

	if(groupbyFilter1) {var groupId1 = groupbyFilter1.options[groupbyFilter1.selectedIndex].value;} else var groupId1=0;
	if(groupbyFilter2) {var groupId2 = groupbyFilter2.options[groupbyFilter2.selectedIndex].value;} else var groupId2=0;
	if(groupbyFilter3) {var groupId3 = groupbyFilter3.options[groupbyFilter3.selectedIndex].value;} else var groupId3=0;
	var dateBy = datebyFilter.options[datebyFilter.selectedIndex].value;
	var zone = zoneFilter.options[zoneFilter.selectedIndex].value;
	if (set == 1) {groupId2=0; groupId3=0; showAll=0;}
	if (set == 2) {groupId3=0;}
	redirectUrl = baseName+"?campaign="+campId+"&status="+statusType+"&group="+group+"&source="+source+"&groupby1="+groupId1+"&groupby2="+groupId2+"&groupby3="+groupId3+"&dateby="+dateBy;
	if (dateBy == 9) {redirectUrl += "&from="+from+"&to="+to;}
	if (zone != 0) {redirectUrl += "&zone="+zone;}
	redirectUrl += "&sortby="+sortby+"&dir="+dir;
	if (cpcs) {redirectUrl += "&cc=1"};
	if (values) {redirectUrl += "&cv=1"};
    if (cvrTime) {redirectUrl += "&cvt=1"};
	if (oNum != 0) {redirectUrl += "&o="+oNum;}
	if (lNum != 0) {redirectUrl += "&l="+lNum;}
	if (subids == 1) {redirectUrl += "&subids=1"};
	if (showAll == 1) {redirectUrl += "&all=1"};
    if (split == 2) {redirectUrl += "&split=2"};
	if (dateBy != 9 || send) {
		window.location.href = redirectUrl+aName;
	} else {
		document.getElementById('calendar').style.display = 'inline-block';
	}
}

function checkUpdate() {
    var editType, msg, agree;
    editType = $("input[name='bulkEdit']:checked").val();
    if (editType == 2) {
        msg = 'This will permanently delete the selected campaigns and ALL the clicks in those campaigns. This can not be undone.\n\nConfirm you want to continue.\n\n**NOTE - If you are deleting multiple campaigns with a high number of clicks, this could take some time. It may be better to delete clicks from individual campaigns.';
        agree = confirm(msg);
        if (agree) {
            return true;
        } else {
            return false;
        }
    } else {
        return true;
    }
}

function changeCampFilter(send) {
    setTimeout( function() { changeCampFilterDelay(send); }, 500 );
}
function changeCampFilterDelay(send) {
    var withClicks, useCvrTime, dailyBreakdown, redirectUrl;
	var statusFilter = $get("statusFilter");
	var groupFilter = $get("groupFilter");
	var sourceFilter = $get("sourceFilter");
	var datebyFilter = $get("datebyFilter");
	var sortby = $getValue("sortby");
	var dir = $getValue("dir");
	var from = $getValue("date3");
	var to = $getValue("date4");
	var zoneFilter = $get("zoneFilter");
    if (exists("wc")) {
        withClicks = $getChecked("wc");
    } else {
        withClicks = 0;
    }
    if (exists("cvt")) {
        useCvrTime = $getChecked("cvt");
    } else {
        useCvrTime = 0;
    }

    if (exists("day")) {
        dailyBreakdown = $getChecked("day");
    } else {
        dailyBreakdown = 0;
    }


	var status = statusFilter.options[statusFilter.selectedIndex].value;
	var groupID = groupFilter.options[groupFilter.selectedIndex].value;
	var sourceID = sourceFilter.options[sourceFilter.selectedIndex].value;
	var dateBy = datebyFilter.options[datebyFilter.selectedIndex].value;
	var zone = zoneFilter.options[zoneFilter.selectedIndex].value;

    if (dailyBreakdown) {
        switch (dateBy) {
            case 0:
            case 7:
            case 8:
                dateBy = 3;
                break;
        }
    }

	redirectUrl = baseName+"?status="+status+"&group="+groupID+"&source="+sourceID+"&dateby="+dateBy;
	if (dateBy == 9) {
		redirectUrl += "&from="+from+"&to="+to;
	}
	if (zone != 0) {
		redirectUrl += "&zone="+zone;
	}
	redirectUrl +="&sortby="+sortby+"&dir="+dir;
    if (withClicks) {
        redirectUrl += "&wc=1";
    }
    if (useCvrTime) {
        redirectUrl += "&cvt=1";
    }
    if (dailyBreakdown) {
        redirectUrl += "&day=1";
    }
	if (dateBy != 9 || send) {
		window.location.href = redirectUrl;
	} else {
		document.getElementById('calendar').style.display = 'inline-block';
	}		
}

function campFilters(send,delta) {
	var statusFilter =	$get("statusFilter");
	var groupFilter =	$get("groupFilter");
	var sourceFilter =	$get("sourceFilter");
	var datebyFilter =	$get("datebyFilter");
	var reportFilter =	$get("reportNum");
	var zoneFilter =	$get("zoneFilter");
	var campFilter =	$get("campaignFilter");
	var ruleFilter =	$get("ruleFilter");
	var campId =	$getValue("campId");
	var ruleId =	$getValue("ruleId");
	var sortby =	$getValue("sortby");
	var dir =		$getValue("dir");
	var from =		$getValue("date3");
	var to =		$getValue("date4");
	var page =		$getValue("page");

	var status =	statusFilter.options[statusFilter.selectedIndex].value;
	var groupID =	groupFilter.options[groupFilter.selectedIndex].value;
	var sourceID =	sourceFilter.options[sourceFilter.selectedIndex].value;
	var dateBy =	datebyFilter.options[datebyFilter.selectedIndex].value;
	var zone =		zoneFilter.options[zoneFilter.selectedIndex].value;
	var report =	reportFilter.options[reportFilter.selectedIndex].value;
	var sCampId =	campFilter.options[campFilter.selectedIndex].value;
	var sRuleId =	ruleFilter.options[ruleFilter.selectedIndex].value;

	if(delta==1) {groupID=-1;sourceID=-1;sCampId=0;}
	if(delta==2) {sourceID=-1;sCampId=0;}
	if(delta==3) {sCampId=0;}

	redirectUrl = baseName+"?rule="+sRuleId+"&r="+report+"&c="+sCampId+"&status="+status+"&group="+groupID+"&source="+sourceID+"&dateby="+dateBy;
	if (dateBy == 9) {
		redirectUrl += "&from="+from+"&to="+to;
	}
	if (zone != 0) {
		redirectUrl += "&zone="+zone;
	}
	if (page != 0) {
		redirectUrl += "&page="+page;
	}
	redirectUrl +="&sortby="+sortby+"&dir="+dir;
	if (dateBy != 9 || send) {
		window.location.href = redirectUrl;
	} else document.getElementById('calendar').style.display = 'inline-block';
}

function ReportFilter(send) {
	var statusType = $getValue("status");
	var groupId = $getValue("groupId");
	var sourceId = $getValue("sourceId");
	var campId = $getValue("campaignId");

	var datebyFilter = $get("datebyFilter");
	var zoneFilter = $get("zoneFilter");
	var from = $getValue("date3");
	var to = $getValue("date4");

	var dateBy = datebyFilter.options[datebyFilter.selectedIndex].value;
	var zone = zoneFilter.options[zoneFilter.selectedIndex].value;

	redirectUrl = baseName+"?campaign="+campId+"&status="+statusType+"&group="+groupId+"&source="+sourceId+"&dateby="+dateBy;
	if (dateBy == 9) {
		redirectUrl += "&from="+from+"&to="+to;
	}
	if (zone != 0) {
		redirectUrl += "&zone="+zone;
	}
	if (dateBy != 9 || send) {
		window.location.href = redirectUrl;
	} else {
		document.getElementById('calendar').style.display = 'inline-block';
	}
}

function showCalender() {
	var datebyFilter = $get("datebyFilter");
	var dateBy = datebyFilter.options[datebyFilter.selectedIndex].value;
	if(dateBy==9) {
		document.getElementById('rCalender').style.display = 'table-row';
		document.getElementById('rFiller').style.display = 'none';
	} else {
		document.getElementById('rCalender').style.display = 'none';
		document.getElementById('rFiller').style.display = 'table-row';
	}
}

function showCalender2() {
	var datebyFilter = $get("datebyFilter");
	var dateBy = datebyFilter.options[datebyFilter.selectedIndex].value;
	if(dateBy==9) {
		document.getElementById('calendar').style.display = 'inline-block';
	} else {
		document.getElementById('calendar').style.display = 'none';
	}
}





function selectTracking() {
	var trackingOptions = $get("camp_tracking");
	var type = trackingOptions.options[trackingOptions.selectedIndex].value;
	if(type==1) {
		document.getElementById('tOption1').style.display = 'block';
		document.getElementById('tOption2').style.display = 'none';
		document.getElementById('offerOption1').style.display = 'block';
		document.getElementById('offerOption2').style.display = 'none';
		document.getElementById('linkOption1').style.display = 'block';
		document.getElementById('linkOption2').style.display = 'none';
	} else if (type==2) {
		document.getElementById('tOption1').style.display = 'none';
		document.getElementById('tOption2').style.display = 'block';
		document.getElementById('offerOption1').style.display = 'block';
		document.getElementById('offerOption2').style.display = 'none';
		document.getElementById('linkOption1').style.display = 'block';
		document.getElementById('linkOption2').style.display = 'none';
	} else if (type==3) {
		document.getElementById('tOption1').style.display = 'none';
		document.getElementById('tOption2').style.display = 'none';
		document.getElementById('offerOption1').style.display = 'none';
		document.getElementById('offerOption2').style.display = 'block';
		document.getElementById('linkOption1').style.display = 'none';
		document.getElementById('linkOption2').style.display = 'block';
    }
}

function groupby() {
	var groupbyFilter = $get("groupbyFilter");
	var datebyFilter = $get("dateFilter");
	var cid = $getValue("cid");
	var redirectUrl = "stats.php?campaign="+cid;

	if (groupbyFilter!=null && cid!=null) {
		var groupType = groupbyFilter.options[groupbyFilter.selectedIndex].value;
		var dateBy = datebyFilter.options[datebyFilter.selectedIndex].value;
		redirectUrl += "&groupby=" + groupType;
		if (dateBy != 0) {
			redirectUrl += "&dateby="+dateBy;
		}
		window.location.href = redirectUrl;
	}
}

function shadeRule(r) {
	if(document.getElementById('rules_' + r + '_ruleInactive').checked) {
		document.getElementById('ruleWrapper_' + r).style.backgroundColor = '#EEEEEE';
        $("#ruleWrapper_" + r).addClass("showRule");
	} else {
		document.getElementById('ruleWrapper_' + r).style.backgroundColor = '#FFFFFF';
        $("#ruleWrapper_" + r).removeClass("showRule");
	}
}


function shade(int,type,o) {
	if (type==2) {
		if(document.getElementById('landers['+int+'][lp_inactive]').checked) {
			document.getElementById('landers['+int+'][lp_name]').style.color = '#777777';
			document.getElementById('landers['+int+'][lp_name]').style.backgroundColor = '#EEEEEE';
			document.getElementById('landers['+int+'][lp_weight]').style.color = '#777777';
			document.getElementById('landers['+int+'][lp_weight]').style.backgroundColor = '#EEEEEE';
			document.getElementById('landers['+int+'][lp_url]').style.color = '#777777';
			document.getElementById('landers['+int+'][lp_url]').style.backgroundColor = '#EEEEEE';
			document.getElementById('landers['+int+'][lp_inactive]').style.color = '#777777';
			document.getElementById('landers['+int+'][lp_inactive]').style.backgroundColor = '#EEEEEE';
		} else {
			document.getElementById('landers['+int+'][lp_name]').style.color = '#000000';
			document.getElementById('landers['+int+'][lp_name]').style.backgroundColor = '#FFFFFF';
			document.getElementById('landers['+int+'][lp_weight]').style.color = '#000000';
			document.getElementById('landers['+int+'][lp_weight]').style.backgroundColor = '#FFFFFF';
			document.getElementById('landers['+int+'][lp_url]').style.color = '#000000';
			document.getElementById('landers['+int+'][lp_url]').style.backgroundColor = '#FFFFFF';
			document.getElementById('landers['+int+'][lp_inactive]').style.color = '#000000';
			document.getElementById('landers['+int+'][lp_inactive]').style.backgroundColor = '#FFFFFF';
		}
	} else if (type==3) {
		if(document.getElementById('pages['+int+']['+o+'][lp_inactive]').checked) {
			document.getElementById('pages['+int+']['+o+'][lp_name]').style.color = '#777777';
			document.getElementById('pages['+int+']['+o+'][lp_name]').style.backgroundColor = '#EEEEEE';
			document.getElementById('pages['+int+']['+o+'][lp_weight]').style.color = '#777777';
			document.getElementById('pages['+int+']['+o+'][lp_weight]').style.backgroundColor = '#EEEEEE';
			document.getElementById('pages['+int+']['+o+'][lp_url]').style.color = '#777777';
			document.getElementById('pages['+int+']['+o+'][lp_url]').style.backgroundColor = '#EEEEEE';
			document.getElementById('pages['+int+']['+o+'][lp_inactive]').style.color = '#777777';
			document.getElementById('pages['+int+']['+o+'][lp_inactive]').style.backgroundColor = '#EEEEEE';
		} else {
			document.getElementById('pages['+int+']['+o+'][lp_name]').style.color = '#000000';
			document.getElementById('pages['+int+']['+o+'][lp_name]').style.backgroundColor = '#FFFFFF';
			document.getElementById('pages['+int+']['+o+'][lp_weight]').style.color = '#000000';
			document.getElementById('pages['+int+']['+o+'][lp_weight]').style.backgroundColor = '#FFFFFF';
			document.getElementById('pages['+int+']['+o+'][lp_url]').style.color = '#000000';
			document.getElementById('pages['+int+']['+o+'][lp_url]').style.backgroundColor = '#FFFFFF';
			document.getElementById('pages['+int+']['+o+'][lp_inactive]').style.color = '#000000';
			document.getElementById('pages['+int+']['+o+'][lp_inactive]').style.backgroundColor = '#FFFFFF';
		}
	} else {
		if(document.getElementById('offers['+int+'][offer_inactive]').checked) {
			document.getElementById('offers['+int+'][offer_name]').style.color = '#777777';
			document.getElementById('offers['+int+'][offer_name]').style.backgroundColor = '#EEEEEE';
			document.getElementById('offers['+int+'][offer_payout]').style.color = '#777777';
			document.getElementById('offers['+int+'][offer_payout]').style.backgroundColor = '#EEEEEE';
			document.getElementById('offers['+int+'][offer_url]').style.color = '#777777';
			document.getElementById('offers['+int+'][offer_url]').style.backgroundColor = '#EEEEEE';
			document.getElementById('offers['+int+'][offer_weight]').style.color = '#777777';
			document.getElementById('offers['+int+'][offer_weight]').style.backgroundColor = '#EEEEEE';
			document.getElementById('offers['+int+'][network_id]').style.color = '#777777';
			document.getElementById('offers['+int+'][network_id]').style.backgroundColor = '#EEEEEE';
			document.getElementById('offers['+int+'][offer_inactive]').style.color = '#777777';
			document.getElementById('offers['+int+'][offer_inactive]').style.backgroundColor = '#EEEEEE';
			document.getElementById('offers['+int+'][offer_subid_field]').style.color = '#777777';
			document.getElementById('offers['+int+'][offer_subid_field]').style.backgroundColor = '#EEEEEE';
			document.getElementById('offers['+int+'][network_id]').style.color = '#777777';
			document.getElementById('offers['+int+'][network_id]').style.backgroundColor = '#EEEEEE';
		} else {
			document.getElementById('offers['+int+'][offer_name]').style.color = '#000000';
			document.getElementById('offers['+int+'][offer_name]').style.backgroundColor = '#FFFFFF';
			document.getElementById('offers['+int+'][offer_payout]').style.color = '#000000';
			document.getElementById('offers['+int+'][offer_payout]').style.backgroundColor = '#FFFFFF';
			document.getElementById('offers['+int+'][offer_url]').style.color = '#000000';
			document.getElementById('offers['+int+'][offer_url]').style.backgroundColor = '#FFFFFF';
			document.getElementById('offers['+int+'][offer_weight]').style.color = '#000000';
			document.getElementById('offers['+int+'][offer_weight]').style.backgroundColor = '#FFFFFF';
			document.getElementById('offers['+int+'][network_id]').style.color = '#000000';
			document.getElementById('offers['+int+'][network_id]').style.backgroundColor = '#FFFFFF';
			document.getElementById('offers['+int+'][offer_inactive]').style.color = '#000000';
			document.getElementById('offers['+int+'][offer_inactive]').style.backgroundColor = '#FFFFFF';
			document.getElementById('offers['+int+'][offer_subid_field]').style.color = '#000000';
			document.getElementById('offers['+int+'][offer_subid_field]').style.backgroundColor = '#FFFFFF';
			document.getElementById('offers['+int+'][network_id]').style.color = '#000000';
			document.getElementById('offers['+int+'][network_id]').style.backgroundColor = '#FFFFFF';
		}
	}
}

function checkInputs() {
	var validated = true;
	var camp_subid_append = '';
	var msg = 'Please correct the following information before saving your campaign.\n\n\n';
	var msg1 = '';
	var msg1p = '';
	var msg2 = '';
	var msg2p = '';
	var msg3 = '';
	var msg4 = '';
	var msg5 = '';
	var msg6 = '';
	// Get type of campaign
	var element = document.getElementsByName('camp_destination');
	for (var ii=0; ii<element.length; ii++) {
		if (element[ii].checked == true) {
			var type = element[ii].value;
		}
	}

	// check campaign name present
	var camp_name = trim(document.getElementById('camp_name').value);
	if (camp_name.length==0) {
		validated=false;
		msg += '* Please name your campaign.\n\n';
		document.getElementById("camp_name").style.backgroundColor = '#f8dbdb';
		document.getElementById("camp_name").style.borderColor = '#e77776';
	}

	// get the type of subid being passed
	var subtype = document.getElementsByName('camp_subid_type');
	for (var x=0; x<subtype.length; x++) {
		if (subtype[x].checked == true) {
			var subid_type = subtype[x].value;
		}
	}
	if (subid_type == 2) camp_subid_append = trim(document.getElementById('camp_subid_append').value);

	var nOffers = parseInt(document.getElementById('nOffers').value);
	var a = 0;
	var nInactive = 0;
	var nMarkedInactive = 0;
	var toffer_weight = 0;
	var wtValid = true;
	var _Array = new Array();

	for (var i=0; i<nOffers; i++) {
		var n = i+1;
		var offer_inactive = false;
		if (document.getElementById("offers["+i+"][offer_inactive]").checked) {
            offer_inactive = true;
            nInactive++;
            nMarkedInactive++
        }
		if (!offer_inactive) {
			var offer_name = trim(document.getElementById("offers["+i+"][offer_name]").value);
			var offer_weight = parseInt(document.getElementById("offers["+i+"][offer_weight]").value);
			var offer_url = trim(document.getElementById("offers["+i+"][offer_url]").value);
			if (offer_name.length==0 && offer_url.length==0) {
                offer_inactive = true;alert(offer_inactive);
                nInactive++;
            }
			if (!offer_inactive) {
				toffer_weight += offer_weight;
				_Array[a] = {'page':i};
				a++;
				if (offer_name.length==0) {
					msg1 += '* Enter a name for Offer '+n+'.\n\n';
					document.getElementById("offers["+i+"][offer_name]").style.backgroundColor = '#f8dbdb';
					document.getElementById("offers["+i+"][offer_name]").style.borderColor = '#e77776';
					validated=false;
				}
				if (offer_weight.length==0) {
					msg1 += '* Set the split % for Offer '+n+'.\n\n';
					document.getElementById("offers["+i+"][offer_weight]").style.backgroundColor = '#f8dbdb';
					document.getElementById("offers["+i+"][offer_weight]").style.borderColor = '#e77776';
					validated=false;
				}
				if (offer_url.length==0) {
					msg1 += '* Enter a url for Offer '+n+'.\n\n';
					document.getElementById("offers["+i+"][offer_url]").style.backgroundColor = '#f8dbdb';
					document.getElementById("offers["+i+"][offer_url]").style.borderColor = '#e77776';
					validated=false;
				}
				if (!offer_weight) {
					msg1 += '* Set the share percentage for Offer '+n+' to something greater than 0.\n\n';
					document.getElementById("offers["+i+"][offer_weight]").style.backgroundColor = '#f8dbdb';
					document.getElementById("offers["+i+"][offer_weight]").style.borderColor = '#e77776';
					validated=false;
				}
			}
		}
	}
	if (toffer_weight!=100) {
		validated=false; 
		msg1p += '* The split on the active offers must total 100%.\n\n';
		wtValid = false;
	}
	if (nInactive==nOffers) {validated=false; msg1 = '* No values were entered in any of the offers.\n\n';msg1p='';}
	if (nMarkedInactive==nOffers) {validated=false; msg1 = '* All of the offers are inactive. Please set at least 1 offer active.\n\n';msg1p='';}
	if(!wtValid) {
		for(y=0; y<_Array.length; y++) {
			var o = _Array[y]["page"];
			document.getElementById("offers["+o+"][offer_weight]").style.backgroundColor = '#f8dbdb';
			document.getElementById("offers["+o+"][offer_weight]").style.borderColor = '#e77776';
		}
	}


	if (type==1) {
		var nLanders = parseInt(document.getElementById('nLanders').value);
		var a = 0;
		var nInactive = 0;
		var nMarkedInactive = 0;
		var tlp_weight = 0;
		var wtValid = true;
		var _Array = new Array();

		for (var i=0; i<nLanders; i++) {
			var n = i+1;
			var lp_inactive = false;
			if (document.getElementById("landers["+i+"][lp_inactive]").checked) {lp_inactive = true; nInactive++;nMarkedInactive++}
			if (!lp_inactive) {
				var lp_name = trim(document.getElementById("landers["+i+"][lp_name]").value);
				var lp_weight = parseInt(document.getElementById("landers["+i+"][lp_weight]").value);
				var lp_url = trim(document.getElementById("landers["+i+"][lp_url]").value);
				if (lp_name.length==0 && lp_url.length==0) {lp_inactive = true;nInactive++;}
				if (!lp_inactive) {
					tlp_weight += lp_weight;
					_Array[a] = {'page':i};
					a++;
					if (lp_name.length==0) {
						msg2 += '* Enter a name for Landing Page '+n+'.\n\n';
						document.getElementById("landers["+i+"][lp_name]").style.backgroundColor = '#f8dbdb';
						document.getElementById("landers["+i+"][lp_name]").style.borderColor = '#e77776';
						validated=false;
					}
					if (lp_weight.length==0) {
						msg2 += '* Set the split % for Landing Page '+n+'.\n\n';
						document.getElementById("landers["+i+"][lp_weight]").style.backgroundColor = '#f8dbdb';
						document.getElementById("landers["+i+"][lp_weight]").style.borderColor = '#e77776';
						validated=false;
					}
					if (lp_url.length==0) {
						msg2 += '* Enter a url for Landing Page '+n+'.\n\n';
						document.getElementById("landers["+i+"][lp_url]").style.backgroundColor = '#f8dbdb';
						document.getElementById("landers["+i+"][lp_url]").style.borderColor = '#e77776';
						validated=false;
					}
					if (!lp_weight) {
						msg2 += '* Set the split % for Landing Page '+n+' to something greater than 0.\n\n';
						document.getElementById("landers["+i+"][lp_weight]").style.backgroundColor = '#f8dbdb';
						document.getElementById("landers["+i+"][lp_weight]").style.borderColor = '#e77776';
						validated=false;					
					}
				}
			}
		}
		if (tlp_weight!=100) {
			validated=false; msg2p += '* The split on the active landing pages must total 100%.\n\n';
			wtValid = false;
		}
		if (nInactive==nLanders) {validated=false; msg2 = '* You have selected Landing Page for your campaign type, however no values were entered in any of the landing pages.\n\n Please enter the appropriate values or change your campaign type.\n\n';msg2p='';}
		if (nMarkedInactive==nLanders) {validated=false; msg2 = '* All of the landing pages are inactive. Please set at least 1 landing page active.\n\n';msg2p='';}
		if(!wtValid) {
			for(y=0; y<_Array.length; y++) {
				var l = _Array[y]["page"];
				document.getElementById("landers["+l+"][lp_weight]").style.backgroundColor = '#f8dbdb';
				document.getElementById("landers["+l+"][lp_weight]").style.borderColor = '#e77776';
			}
		}
	} else if (type==2) {
		var nPages = parseInt(document.getElementById('nPages').value);
		var tLanders = 0;
		var nInactive = 0;
		var nMarkedInactive = 0;
		for (var i=0; i<nPages; i++) {
			var page_inactive = false;
			var wtValid = true;
			var n = i+1;
			var nLanders = parseInt(document.getElementById('nPages'+n).value);
			var nLandersInactive = 0;
			var last = nLanders-1;
			var tlp_weight = 0;
			var a = 0;
			var _Array = new Array();
			for (var j=0; j<nLanders; j++) {
				tLanders++;
				var nn = j+1;
				var lp_inactive = false;
				if (document.getElementById("pages["+i+"]["+j+"][lp_inactive]").checked) {lp_inactive = true;nInactive++;nLandersInactive++;nMarkedInactive++}
				if (!lp_inactive) {
					var lp_name = trim(document.getElementById("pages["+i+"]["+j+"][lp_name]").value);
					var lp_weight = parseInt(document.getElementById("pages["+i+"]["+j+"][lp_weight]").value);
					var lp_url = trim(document.getElementById("pages["+i+"]["+j+"][lp_url]").value);
					if (lp_name.length==0 && lp_url.length==0) {lp_inactive = true;nInactive++;nLandersInactive++}
					if (!lp_inactive) {
						tlp_weight += lp_weight;
						_Array[a] = {'page':i,'option':j};
						a++;
						if (lp_name.length==0) {
							msg3 += '* Enter a name for Landing Page '+n+'-'+nn+'.\n\n';
							document.getElementById("pages["+i+"]["+j+"][lp_name]").style.backgroundColor = '#f8dbdb';
							document.getElementById("pages["+i+"]["+j+"][lp_name]").style.borderColor = '#e77776';
							validated=false;
						}
						if (lp_weight.length==0) {
							msg3 += '* Set the split % for Landing Page '+n+'-'+nn+'.\n\n';
							document.getElementById("pages["+i+"]["+j+"][lp_weight]").style.backgroundColor = '#f8dbdb';
							document.getElementById("pages["+i+"]["+j+"][lp_weight]").style.borderColor = '#e77776';
							validated=false;
						}
						if (lp_url.length==0) {
							msg3 += '* Enter a url for Landing Page '+n+'-'+nn+'.\n\n';
							document.getElementById("pages["+i+"]["+j+"][lp_url]").style.backgroundColor = '#f8dbdb';
							document.getElementById("pages["+i+"]["+j+"][lp_url]").style.borderColor = '#e77776';
							validated=false;
						}
						if (!lp_weight) {
							msg3 += '* Set the split % for Landing Page '+n+'-'+nn+' to something greater than 0.\n\n';
							document.getElementById("pages["+i+"]["+j+"][lp_weight]").style.backgroundColor = '#f8dbdb';
							document.getElementById("pages["+i+"]["+j+"][lp_weight]").style.borderColor = '#e77776';
							validated=false;
						}
					}
				}
				if (j==last && nLanders != nLandersInactive) {
					if (tlp_weight != 100) {
						msg4 += '* The split for the active landers for Landing Page '+n+' must total 100%.\n\n';
						validated=false;
						wtValid = false;
					}
				}
			}
			if(!wtValid) {
				for(y=0; y<_Array.length; y++) {
					var p = _Array[y]["page"];
					var o = _Array[y]["option"];
					document.getElementById("pages["+p+"]["+o+"][lp_weight]").style.backgroundColor = '#f8dbdb';
					document.getElementById("pages["+p+"]["+o+"][lp_weight]").style.borderColor = '#e77776';
				}
			}
		}
		if (nInactive==tLanders) {validated=false; msg3 = '* You have selected Path for your campaign type, however no values were entered in any of the landing pages.\n\n Please enter the appropriate values or change your campaign type.\n\n';msg4='';}
		if (nMarkedInactive==tLanders) {validated=false; msg3 = '* All of the landing pages are inactive. Please set at least 1 landing page active.\n\n';msg4='';}
	}

	// check the rules
	var rMsg = '';
	var nRules = $('#ruleDiv').children().size() - 1;
	var nActiveRules = 0;
	
	var r = 0;
	ruleDiv = document.getElementById('ruleDiv');
	$(ruleDiv).children().each(function () {
		if ($(this).is(":visible")) {
			var rNumber = r + 1;
			if (document.getElementById("rules_" + r + "_ruleInactive").checked == false && document.getElementById("rules_" + r + "_ruleDelete").checked == false) {
				if (trim(document.getElementById("rules_" + r + "_ruleName").value) != '') {
					var nCriteria = 0;
					var criteriaWrapper = document.getElementById('criteriaWrapper_' + r);
					var i = 0;
					$(criteriaWrapper).children().each(function () {
						if ($(this).is(":visible") && $(this).attr('id')) {
							var ruleBase = this.id.replace('row', 'rules');
							var criteriaType = parseInt(document.getElementById(ruleBase + '_criteriaType').value);
							if (criteriaType > 0) {
								nCriteria++;
							}
							var ruleBase = this.id.replace('row', 'rules');
							if (criteriaType == 1) {
								if (trim(document.getElementById(ruleBase + '_matchData').value) == '') {
									validated=false;
									rMsg += 'One of the criteria in Rule ' + rNumber + ' has "Country" selected, but no value has been entered.\n\n'; 
								}
							} else if (criteriaType == 2) {
								if (parseInt(document.getElementById(ruleBase + '_criteriaSelect').value) == 3) {
									if (trim(document.getElementById(ruleBase + '_matchData').value) == '') {
										validated=false;
										rMsg += 'One of the criteria in Rule ' + rNumber + ' has "Carrier" selected, but no value has been entered.\n\n'; 
									}
								}
							} else if (criteriaType == 4) {
								if (parseInt(document.getElementById(ruleBase + '_criteriaSelect').value) == 3) {
									if (trim(document.getElementById(ruleBase + '_matchData').value) == '') {
										validated=false;
										rMsg += 'One of the criteria in Rule ' + rNumber + ' has "Manufacturer" selected, but no value has been entered.\n\n';
									}
								}
                            }
						}
					});
					if (nCriteria > 0) {
						var ruleRedirect = null;
						var ruleRedirectRadios = jQuery("input[name='rules[" + r + "][ruleRedirect]']");
						var ruleRedirect = ruleRedirectRadios.filter(":checked").val();

						if (ruleRedirect !== null) {
							if (ruleRedirect == 0) {
								if (parseInt(document.getElementById("rules_" + r + "_offer_number").value) == 0) {
									validated=false;
									rMsg += 'Rule ' + rNumber + ' is set to redirect to an offer, however no offer has been selected.\n\n';
								}
							} else if (ruleRedirect == 1) {
								if (parseInt(document.getElementById("rules_" + r + "_lp_number").value) == 0) {
									validated=false;
									rMsg += 'Rule ' + rNumber + ' is set to redirect to a landing page, however no landing page has been selected.\n\n';
								}
							} else if (ruleRedirect == 2) {
								if (trim(document.getElementById("rules_" + r + "_url").value) == '') {
									validated=false;
									rMsg += 'Rule ' + rNumber + ' is set to redirect to a link, however no link has been entered.\n\n';
								}
							} else if (ruleRedirect == 3) {
								if (parseInt(document.getElementById("rules_" + r + "_cid").value) == 0) {
									validated=false;
									rMsg += 'Rule ' + rNumber + ' is set to redirect to a campaign, however no campaign has been selected.\n\n';
								}
							} else if (ruleRedirect == 4) {
								if (parseInt(document.getElementById("rules_" + r + "_factor").value) == 0) {
									validated=false;
									rMsg += 'Rule ' + rNumber + ' is set to auto-optimize, however no optimization factor has been selected.\n\n';
								}
							}
						} else {
							validated=false;
							rMsg += 'Rule ' + rNumber + ' needs a redirect option selected.\n\n';
						}
					} else {
						rMsg += 'Rule ' + rNumber + ' has no criteria created. To update the campaign without saving this rule, remove the rule name. Reloading the page instead of updating will also delete this rule.\n\n';
					}
					var defaultSet = $getChecked("defaultRule_ruleDefault");
					if (!defaultSet) {
						var defaultRadios = document.getElementsByName("defaultRule[ruleRedirect]");
						var ruleDefault = null;
						for (var i = 0; i < defaultRadios.length; i++) {       
							if (defaultRadios[i].checked) {
								ruleDefault = defaultRadios[i].value;
								break;
							}
						}
						if (ruleDefault !== null) {
							if (ruleDefault == 0) {
								if (parseInt(document.getElementById("defaultRule_offer_number").value) == 0) {
									validated=false;
									rMsg += 'An offer has been selected for the default, however no offer number has been selected in the dropdown.\n\n';
								}
							} else if (ruleDefault == 1) {
								if (parseInt(document.getElementById("defaultRule_lp_number").value) == 0) {
									validated=false;
									rMsg += 'A landing page has been selected for the default, however no landing page has been selected in the dropdown.\n\n';
								}
							} else if (ruleDefault == 2) {
								if (trim(document.getElementById("defaultRule_url").value) == '') {
									validated=false;
									rMsg += 'A link has been selected for the default, however no link has been entered.\n\n';
								}
							} else if (ruleDefault == 3) {
								if (parseInt(document.getElementById("defaultRule_cid").value) == 0) {
									validated=false;
									rMsg += 'A campaign has been selected for the default, however no campaign has been selected in the dropdown.\n\n';
								}
							} else if (ruleDefault == 4) {
								if (parseInt(document.getElementById("defaultRule_factor").value) == 0) {
									validated=false;
									rMsg += 'Auto-optimization has been selected for the default, however no factor has been selected in the dropdown.\n\n';
								}
							}
						} else {
							validated=false;
							rMsg += 'Under the default, "Traffic will proceed normally" is unchecked. Select an option for traffic to go to, or check the box for traffic to proceed normally.\n\n';
						}
					}
				}
			}
		}
		r++;
	});

	if (!validated) {
		if (msg1 != '' || msg1p != '') {
			msg += msg1;
			msg += msg1p;
			if (msg1p != '') {msg += '(You can also set offers active/inactive or enter/delete the offer fields, and then set the split %.)\n\n';}
		}
		if (msg2 != '' || msg2p != '') {
			msg += msg2;
			msg += msg2p;
		}
		if (msg3 != '' || msg4 != '') {
			msg += msg3;
			msg += msg4;
		}
		if (msg2p != '' || msg4 != '') {msg += '\n(You can also set Landing Pages active/inactive or enter/delete Landing Page fields, and then set the split %.)\n';}
		if (rMsg != '') msg += rMsg;
		alert( msg );
		return false;
	} else {
		return true;
	}
}

function checkWeight(element)
{
	var amt = parseInt(element.value);
	if (amt<0) amt = 0;
	if (amt>100) amt = 100;
	if (isNaN(amt)) amt = 0;
	var amtNull = trim(element.value);
	if (amtNull.length == 0) amt = 0;
	element.value = amt;
	element.style.backgroundColor = '#FFFFFF';
	element.style.borderColor = '#848484';
}

function setEqualWeight(type,p) {
	var weight = 0;
	var nOptions = 0;
	var x = p+1;
	var _Array = new Array();
	if (type==1) {
		var nPossible = parseInt(document.getElementById('nOffers').value);
		for (var i=0; i<nPossible; i++) {
			var _url = trim(document.getElementById("offers["+i+"][offer_url]").value);
			if (_url.length==0 || document.getElementById("offers["+i+"][offer_inactive]").checked) {
				_Array[i] = {'Number':i,'active':0};
			} else {
				_Array[i] = {'Number':i,'active':1};
				nOptions++;
			}		
		}
	} else if (type==2) {
		var nPossible = parseInt(document.getElementById('nLanders').value);
		for (var i=0; i<nPossible; i++) {
			var _url = trim(document.getElementById("landers["+i+"][lp_url]").value);
			if (_url.length==0 || document.getElementById("landers["+i+"][lp_inactive]").checked) {
				_Array[i] = {'Number':i,'active':0};
			} else {
				_Array[i] = {'Number':i,'active':1};
				nOptions++;
			}	
		}
	} else if (type==3) {
		var nPossible = parseInt(document.getElementById('nPages'+x).value);
		for (var i=0; i<nPossible; i++) {
			var _url = trim(document.getElementById("pages["+p+"]["+i+"][lp_url]").value);
			if (_url.length==0 || document.getElementById("pages["+p+"]["+i+"][lp_inactive]").checked) {
				_Array[i] = {'Number':i,'active':0};
			} else {
				_Array[i] = {'Number':i,'active':1};
				nOptions++;
			}	
		}
	}
	var extra = 1;
	var adjust = false;
	var adjustR = 0;
	var remainder = 100%nOptions;
	if (remainder>0) {adjustR = remainder; adjust = true;}
	if (nOptions) {
		for(i=0; i<_Array.length; i++) {
			if (adjust) {
				if (adjustR>0) { 
					weight = ((100-remainder)/nOptions)+1;
					adjustR--;
				} else { 
					weight = (100-remainder)/nOptions;
				}
			} else {
				weight = 100/nOptions;
			}
			var n = _Array[i]["Number"];
			var active = _Array[i]["active"];
			if (active) {
				if (type==1) {
					document.getElementById("offers["+n+"][offer_weight]").value = weight;
					document.getElementById("offers["+n+"][offer_weight]").style.backgroundColor = '#FFFFFF';
					document.getElementById("offers["+n+"][offer_weight]").style.borderColor = '#848484';
				} else if (type==2) {
					document.getElementById("landers["+n+"][lp_weight]").value = weight;
					document.getElementById("landers["+n+"][lp_weight]").style.backgroundColor = '#FFFFFF';
					document.getElementById("landers["+n+"][lp_weight]").style.borderColor = '#848484';
				} else if (type==3) {
					document.getElementById("pages["+p+"]["+n+"][lp_weight]").value = weight;
					document.getElementById("pages["+p+"]["+n+"][lp_weight]").style.backgroundColor = '#FFFFFF';
					document.getElementById("pages["+p+"]["+n+"][lp_weight]").style.borderColor = '#848484';
				}
			} else {
				if (type==1) {
					document.getElementById("offers["+n+"][offer_weight]").value = 0;
					document.getElementById("offers["+n+"][offer_weight]").style.backgroundColor = '#FFFFFF';
					document.getElementById("offers["+n+"][offer_weight]").style.borderColor = '#848484';
				} else if (type==2) {
					document.getElementById("landers["+n+"][lp_weight]").value = 0;
					document.getElementById("landers["+n+"][lp_weight]").style.backgroundColor = '#FFFFFF';
					document.getElementById("landers["+n+"][lp_weight]").style.borderColor = '#848484';
				} else if (type==3) {
					document.getElementById("pages["+p+"]["+n+"][lp_weight]").value = 0;
					document.getElementById("pages["+p+"]["+n+"][lp_weight]").style.backgroundColor = '#FFFFFF';
					document.getElementById("pages["+p+"]["+n+"][lp_weight]").style.borderColor = '#848484';
				}
			}
		}
	} else {
		if (type==1) alert('All the offers are set inactive and/or there are no urls in any of them.\n\nSet at least 1 offer active.');
		if (type==2) alert('All the landing pages are set inactive and/or there are no urls in any of them.\n\nSet at least 1 landing page active.');
		if (type==3) alert('All the landing pages are set inactive and/or there are no urls in any of them.\n\nSet at least 1 landing page active.');
	}
}
  //call it like this

function print_r(arr,level) {
var dumped_text = "";
if(!level) level = 0;

//The padding given at the beginning of the line.
var level_padding = "";
for(var j=0;j<level+1;j++) level_padding += "    ";

if(typeof(arr) == 'object') { //Array/Hashes/Objects 
    for(var item in arr) {
        var value = arr[item];

        if(typeof(value) == 'object') { //If it is an array,
            dumped_text += level_padding + "'" + item + "' ...\n";
            dumped_text += print_r(value,level+1);
        } else {
            dumped_text += level_padding + "'" + item + "' => \"" + value + "\"\n";
        }
    }
} else { //Stings/Chars/Numbers etc.
    dumped_text = "===>"+arr+"<===("+typeof(arr)+")";
}
return dumped_text;
}

function reloadPage() {
    location.reload(true);
}

function attachColorbox() {
	$(".iframe").colorbox({iframe:true, scrolling:false, opacity:.25, innerWidth:"700px", innerHeight:"460px"});
    $(".iframe2").colorbox({iframe:true, scrolling:false, opacity:.25, innerWidth:"700px", innerHeight:"535px"});
    $(".iframe3").colorbox({iframe:true, scrolling:false, opacity:.25, innerWidth:"700px", innerHeight:"660px"});
    $(".iframe4").colorbox({iframe:true, scrolling:false, opacity:.25, innerWidth:"700px", innerHeight:"750px"});
    $(".iframe5").colorbox({iframe:true, scrolling:false, opacity:.25, innerWidth:"700px", innerHeight:"575px"});
    $(".iframe6").colorbox({iframe:true, scrolling:false, opacity:.25, innerWidth:"700px", innerHeight:"700px"});
    $(".iframe7").colorbox({iframe:true, scrolling:false, opacity:.25, innerWidth:"700px", innerHeight:"900px"});
    $(".iframeRef1").colorbox({iframe:true, scrolling:false, opacity:.25, innerWidth:"450px", innerHeight:"625px"});
    $(".iframeRef2").colorbox({iframe:true, scrolling:false, opacity:.25, innerWidth:"450px", innerHeight:"525px"});
}
function diableRightClick() {
	$(".remove").bind("contextmenu",function(e){return false;}); 
}


function loadPopUps(page) {
    switch (page) {
        case 'filters':
            $(".iframeCampInfo").colorbox({iframe:true, scrolling:false, opacity:.25, innerWidth:"700px", innerHeight:"460px"});
            $(".iframeCheckFilter").colorbox({iframe:true, scrolling:false, opacity:.25, innerWidth:"700px", innerHeight:"460px", overlayClose:false, onClosed:reloadPage});
            break;
        default:
            $(".iframe").colorbox({iframe:true, scrolling:false, opacity:.25, innerWidth:"700px", innerHeight:"460px"});
            $(".iframe2").colorbox({iframe:true, scrolling:false, opacity:.25, innerWidth:"700px", innerHeight:"535px"});
            $(".iframe3").colorbox({iframe:true, scrolling:false, opacity:.25, innerWidth:"700px", innerHeight:"660px"});
            $(".iframe4").colorbox({iframe:true, scrolling:false, opacity:.25, innerWidth:"700px", innerHeight:"750px"});
            $(".iframe5").colorbox({iframe:true, scrolling:false, opacity:.25, innerWidth:"700px", innerHeight:"575px"});
            $(".iframe6").colorbox({iframe:true, scrolling:false, opacity:.25, innerWidth:"700px", innerHeight:"700px"});
            $(".iframe7").colorbox({iframe:true, scrolling:false, opacity:.25, innerWidth:"700px", innerHeight:"900px"});
            $(".iframeRef1").colorbox({iframe:true, scrolling:false, opacity:.25, innerWidth:"450px", innerHeight:"625px"});
            $(".iframeRef2").colorbox({iframe:true, scrolling:false, opacity:.25, innerWidth:"450px", innerHeight:"525px"});
            $(".iframeCampInfo").colorbox({iframe:true, scrolling:false, opacity:.25, innerWidth:"700px", innerHeight:"460px"});
            break;
    }

}




