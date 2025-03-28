Math.easeInOutQuad = function(t, b, c, d) {
  t /= d/2;
  if (t < 1) return c/2*t*t + b;
  t--;
  return -c/2 * (t*(t-2) - 1) + b;
};

const re = /\s*(?:,|$)\s*/;
if (!Element.prototype.matches) {
  Element.prototype.matches =
    Element.prototype.msMatchesSelector ||
    Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
  Element.prototype.closest = function(s) {
    var el = this;

    do {
      if (Element.prototype.matches.call(el, s)) return el;
      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);
    return null;
  };
}

if (!Element.prototype.siblings) {
  /**
   *
   * @param {string} s
   * @return {HTMLDOM} Array
   */
  Element.prototype.siblings = function(s) {
    var el = this;
    // if no parent, return no sibling
    if (!el.parentNode) {
      return null;
    }
    return Array.from(el.parentNode.querySelectorAll(s)).filter((child) =>
      child !== el
    );
  };
}

if (!Element.prototype.show) {
  Element.prototype.show = function() {
    this.style.display = 'block';
    return this;
  };
}

if (!Element.prototype.hide) {
  Element.prototype.hide = function() {
    this.style.display = 'none';
    return this;
  };
}

if (!NodeList.prototype.show) {
  NodeList.prototype.show = function() {
    this.forEach(function(element) {
      element.style.display = 'block';
    });
    return this;
  };
}

if (!NodeList.prototype.hide) {
  NodeList.prototype.hide = function() {
    this.forEach(function(element) {
      element.style.display = 'none';
    });
    return this;
  };
}

if (!NodeList.prototype.removeClass) {
  NodeList.prototype.removeClass = function(cls) {
    cls = cls.split(re);
    this.forEach(function(element) {
      element.classList.remove(...cls);
    });
    return this;
  };
}

if (!NodeList.prototype.addClass) {
  NodeList.prototype.addClass = function(cls) {
    cls = cls.split(re);
    this.forEach(function(element) {
      element.classList.add(...cls);
    });
    return this;
  };
}

if (!NodeList.prototype.toggleClass) {
  NodeList.prototype.toggleClass = function(cls) {
    this.forEach(function(element) {
      element.classList.toggle(cls);
    });
    return this;
  };
}

if (!Element.prototype.removeClass) {
  Element.prototype.removeClass = function(cls) {
    cls = cls.split(re);
    this.classList.remove(...cls);
    return this;
  };
}

if (!Element.prototype.addClass) {
  Element.prototype.addClass = function(cls) {
    cls = cls.split(re);
    this.classList.add(...cls);
    return this;
  };
}

if (!Element.prototype.toggleClass) {
  Element.prototype.toggleClass = function(cls) {
    this.classList.toggle(cls);
  };
}

if (!Element.prototype.hasClass) {
  Element.prototype.hasClass = function(cls) {
    return this.classList.contains(cls);
  };
}


if (!Element.prototype.isVisible) {
  Element.prototype.isVisible = function() {
    return !!(this.offsetWidth || this.offsetHeight || this.getClientRects().length);
  };
}

if (!NodeList.prototype.hasClass) {
  NodeList.prototype.hasClass = function(cls) {
    let _hasClass = false;
    this.forEach(function(element) {
      _hasClass = _hasClass || element.classList.contains(cls);
    });
    return _hasClass;
  };
}

