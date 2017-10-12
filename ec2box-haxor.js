// Disable form
const form = $('#viewSystems');
form.attr('action', '');
form.submit(function () {
  return false;
});

// Find input
const el = $('input[tabindex=2]');

// Create new input
const newEl = document.createElement('input');
newEl.setAttribute('name', 'submit');

// Replace inputs
el.replaceWith(newEl);
$(newEl).keypress(function (e) {
  if (e.which != 13) {
    return;
  }
  e.preventDefault();
  const reg = new RegExp($(newEl).val())

  // Uncheck all checkboxes
  $('tr').each(function (idx, el) {
    // Unhide rows
    $(el).show();

    // Uncheck boxes
    $(el).find('input[type=checkbox]').prop('checked', false);
  });

  // Check off the ones we're looking for
  $('tr').filter(function () {
    return reg.test($(this).text());
  }).each(function (idx, el) {
    $(el).find('input[type=checkbox]').prop('checked', true);
  });

  // Remove the ones we're not
  $("input:checkbox:not(:checked)").each(function (idx, el) {
    $(el).closest('tr').hide();
  });
});

