---
layout: post
title: Touching the Functional: a flexible sorting abstraction in JS
categories: [research]
---

Domain-specific sorting rules.

```
function Ordering(ItemStatus) {
    function isCheckable(value) {
        return CommonUtils.isDefined(value) && value !== null;
    }

    function checkedPropertyComparison(a, b, propName, comparer) {
        if (isCheckable(a[propName])) {
            if (isCheckable(b[propName])) {
                return comparer(a[propName], b[propName]);
            } else {
                return 1;
            }
        }

        return 0;
    }

    // Some custom status, calculated externally, or based on more complex logic regarding an entity.
    function byStatus(a, b) {
        return ItemStatus.compare(new ItemStatus(b), new ItemStatus(a));
    }

    function byFooParameter(a, b) {
        return checkedPropertyComparison(a, b, 'fooParameter', function(a, b) {
            return a.compare(b);
        });
    }

    function byBarParameter(a, b) {
        return checkedPropertyComparison(a, b, 'barParameter', function(a, b) {
            return MathUtils.sig(moment(a)
                .diff(moment(b)));
        });
    }

    function bySizeOfArrayParameter(a, b) {
        return MathUtils.sig(a.quux.length - b.quux.length);
    }

    return [
        _.compose(MathUtils.neg, byStatus),
        byFooParameter,
        byBarParameter,
        _.compose(MathUtils.neg, bySizeOfArrayParameter)
    ];
}
```

Sorter 'engine', takes rules into account with respect to their ordering.

```
function mkSorter(conditions) {
    return function(elements) {
        return elements.sort(function(a, b) {
            var result = 0;
            conditions.some(function(condition) {
                var partialResult = condition(a, b);
                if (partialResult !== 0) {
                    result = partialResult;
                    return true;
                }
            });

            return result;
        });
    };
}
```
