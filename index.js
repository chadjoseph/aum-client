import dispatch from 'aum-dispatch';
import queue from 'aum-queue';

export default function (url) {
  return {
    DELETE: function (id) {
      var options = {
        id: Date.now(),
        method: 'DELETE',
        url: url + id
      };

      dispatch('request', options);

      return queue(options.id).promise;
    },

    GET: function (params) {
      var options = {
        id: Date.now(),
        method: 'GET',
        url: url + params.join('/')
      };

      dispatch('request', options);

      return queue(options.id).promise;
    },

    PATCH: function (id, data) {
      var options = {
        data: data,
        id: Date.now(),
        method: 'PATCH',
        url: url + id
      };

      dispatch('request', options);

      return queue(options.id).promise;
    },

    POST: function (data) {
      var options = {
        data: data,
        id: Date.now(),
        method: 'POST',
        url: url
      };

      dispatch('request', options);

      return queue(options.id).promise;
    },

    PUT: function (id, data) {
      var options = {
        data: data,
        id: Date.now(),
        method: 'PUT',
        url: url + id
      };

      dispatch('request', options);

      return queue(options.id).promise;
    }
  };
}

