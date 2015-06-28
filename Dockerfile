FROM starefossen/github-pages:35

RUN gem install jekyll-sass # jekyll-asset-pipeline jekyll-lunr-js-search

VOLUME ["/usr/src/app"]
EXPOSE 4000

CMD /bin/bash

