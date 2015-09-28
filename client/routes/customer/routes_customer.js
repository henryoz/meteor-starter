// ***************************************************************
// ROUTES (Documents)
// ***************************************************************

Router.map(function() {
  // CUSTOMER DASHBOARD
  // -------------------------------------------------------
  this.route('customerDashboard', {
    template: 'customerDashboard',
    path: 'customer/dashboard',
  });

  // DOCUMENTS INDEX
  // -------------------------------------------------------
  this.route('documentsIndex', {
    template: 'documentsIndex',
    path: 'customer/documents',
    waitOn: function () {
      return Meteor.subscribe('documents');
    },
    data: {
      documents: function () {
        return Documents.find({}, {sort: {createdAt: -1}});
      }
    }
  });

  // DOCUMENT NEW
  // -------------------------------------------------------
  this.route('documentNew', {
    template: 'documentNew',
    path: 'customer/documents/new'
  });

  // DOCUMENT SHOW
  // -------------------------------------------------------
  this.route('documentShow', {
    template: 'documentShow',
    path: 'customer/documents/:_id',
    waitOn: function () {
      return Meteor.subscribe('document', this.params._id);
    },
    data: function () {
      return Documents.findOne(this.params._id);
    }
  });

  // DOCUMENT EDIT
  // -------------------------------------------------------
  this.route('documentEdit', {
    template: 'documentEdit',
    path: 'customer/documents/:_id/edit',
    waitOn: function () {
      return Meteor.subscribe('document', this.params._id);
    },
    data: function () {
      return Documents.findOne(this.params._id);
    }
  });




});
