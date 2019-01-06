<template lang="html">
<vue-bootstrap-typeahead class="input-group input-group-alternative" :data="queryData" v-model="query" :serializer="s => s.name" placeholder="Type an keyword..." @hit="selectedData = $event">

    <template slot="suggestion" slot-scope="{ data, htmlText }">
        <span v-html="htmlText"></span>&nbsp;
        <small>{{ data.name }}</small>
    </template>
</vue-bootstrap-typeahead>
</template>

<script lang="js">
import VueBootstrapTypeahead from 'vue-bootstrap-typeahead'
import _ from 'underscore'
import Bloodhound from 'bloodhound-js'

export default {
    name: 'search-box',
    components: {
        VueBootstrapTypeahead
    },
    props: ['dataSourceUrl'],
    mounted() {

    },
    data() {
        return {
            queryData: [],
            query: '',
            selectedData: null,
            dataSource: null
        };
    },
    created: function () {
        this.dataSource = this.getSource();
    },
    methods: {
        async getQueries(query) {
            if (query.length > 2) {
                var queryData = this.queryData;
                this.dataSource.search(query, function (datums) {
                    console.log(datums);
                    queryData = datums;
                }, function (datums) {
                    console.log('async call');
                    console.log(datums);
                    queryData = datums;
                });
            }
        },
        //,
        //onDataStoreFail() {
        //    console.log('Error load Contacts from server');
        //},
        getSource() {
            return new Bloodhound({
                datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
                queryTokenizer: Bloodhound.tokenizers.whitespace,
                identify: function (obj) {
                    return obj.id;
                },
                prefetch: {
                    url: this.dataSourceUrl,
                    transform: function (data) { // we modify the prefetch response
                        var newData = []; // here to match the response format
                        data.forEach(function (item) { // of the remote endpoint
                            newData.push({
                                'name': item.name,
                                'id': item.id
                            });
                        });
                        return newData;
                    }
                },
                remote: {
                    url: this.dataSourceUrl + '?q=%QUERY',
                    wildcard: '%QUERY' // %QUERY will be replace by users input in
                } // the url option.
            });
        }
    },
    watch: {
        query: _.debounce(function (q) {
            this.getQueries(q);
        }, 500)
    }
}
</script>
