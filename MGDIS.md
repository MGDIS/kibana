# MGDIS integration of kibana 4

This is a fork of kibana maintained with a few purposes:

  - organize our contributions to the original kibana project.
  - provide autonomy from kibana release and shipping process.
  - contain a few MGDIS specifics features (as few as possible).

## Useful links

  - [Contributing guide from original project](https://github.com/elastic/kibana/blob/master/CONTRIBUTING.md)

## Development environment

See the [contributing guide](https://github.com/elastic/kibana/blob/master/CONTRIBUTING.md).

Note that kibana uses npm's scoped packages which are not supported by our own artifactory based registry.
To use the standard npm registry you can create a .npmrc file in the project with this content:

    registry=http://registry.npmjs.org/

## Branches and code management

A few rules should be respected to maintain this repo properly.
The purpose is to both be able to maintain MGDIS specific features and keep compatibility with the original project.

  - **master** should be a up to date clone of the original project's master
  - **master** should NOT contain anything MGDIS specific
  - **mgdis** should be kept up to date with master
  - **feature branches** should be created from master after updating master from the original repo
  - **a feature branch** should be created for every feature
  - **a feature** that has the slightest chance of being included in the original project should follow its [contributing guide](https://github.com/elastic/kibana/blob/master/CONTRIBUTING.md).
  - **any feature** should be developped in respect of the original [style guide](https://github.com/MGDIS/kibana/blob/mgdis/STYLEGUIDE.md).

## Show blockers

These are issues that are considered as absolutely required by MGDIS before using Kibana 4 in our solutions.

### Internationalization

[An issue](https://github.com/elastic/kibana/issues/706) exists.

It is accepted and part of the roadmap but without specific milestone.

### Label everything

It should be possible to associate some labels to various elements (field column name, filter, aggregation levels, etc.).

A few related issues:
  - [Customizable axis labels](https://github.com/elastic/kibana/issues/2386)
  - [Configurable filter/range legend values](https://github.com/elastic/kibana/issues/2245). This one has a merged pull request.

It seems that the subject is not fully covered by issues yet.

## Important issues

Important, but not so much as to prevent using Kibana.

### Relationships

Apply a filter based on a parent/child relationship: [Parent and child filters](https://github.com/elastic/kibana/issues/3730).

Create aggregations on complex objects whose mappings use nested types: [Nested type aggregations](https://github.com/elastic/kibana/issues/1084).

### Accessibility

Is there a review of kibana on this topic somewhere ?

At least one issue: [Time filter widget is not keyboard accessible](https://github.com/elastic/kibana/issues/4362).

### Extensibility

Plugin mechanism. See [this issue](https://github.com/elastic/kibana/issues/3424).

Field formatting. See [Field Formatting](https://github.com/elastic/kibana/issues/1543) and [More expressive field formatters via custom directives](https://github.com/elastic/kibana/issues/4361).
