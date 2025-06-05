#!/usr/bin/env make

.PHONY: init
init:
	hugo mod get

.PHONY: update
update:
	hugo mod get -u
	hugo mod tidy

.PHONY: dev
dev:
	hugo server --buildDrafts --buildFuture --disableFastRender

.PHONY: build
build:
	hugo
