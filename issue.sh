#!/bin/bash
while true; do out=$(bun ./compile.js); echo $out; echo $out | grep -q "Out of bounds" && break; done
