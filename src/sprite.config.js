import namespaces from '@workato/svg-baker/namespaces';

const { svg, xlink } = namespaces;

export default {
  attrs: {
    [svg.name]: svg.uri,
    [xlink.name]: xlink.uri,
    style: 'display: none',
    'aria-hidden': 'true'
  }
};
