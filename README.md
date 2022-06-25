# LSP-aurelia (WIP)

This is a helper package that automatically installs and updates the [aurelia Language Server](https://github.com/aurelia/vscode-extension) for you.

*Please note the plugin hasn't been submitted to [packagecontrol.io](https://packagecontrol.io/). Thus has to be installed manually.*

**Aurelia language server is not yet published to NPM. A [github issue](https://github.com/aurelia/vscode-extension/issues/198) has been submitted.**

## Installation

- Install [LSP](https://packagecontrol.io/packages/LSP) from Package Control.
- Install [aureliajs-syntax](https://github.com/LetsZiggy/aureliajs-syntax) from repository (See [README](https://github.com/LetsZiggy/aureliajs-syntax/blob/main/README.md)).
- Install `LSP-aurelia`
	- `Package Control: Add Repository` Method (Recommended)
		1. Open `Command Palette` (Default: `Primary + Shift + p`)
		2. `Package Control: Add Repository`
		3. `https://raw.githubusercontent.com/LetsZiggy/LSP-aurelia/main/repository-package.json`
		4. Open `Command Palette`
		5. `Package Control: Install Package`
		6. `LSP-aurelia`
	- "Manual" Method (Requires manual update)
		1. Download this repository through `Download ZIP`
		2. Rename folder to `LSP-aurelia`
		3. Move folder to `[SublimeText]/Packages` folder
			- To access `[SublimeText]/Packages` folder:
				1. Open/Restart `Sublime Text`
				2. Open the `Command Palette` (Default: `Primary + Shift + p`)
				3. `Preferences: Browse Packages`
		4. Restart `Sublime Text`
- Restart Sublime.

## Configuration

Open configuration file using command palette with `Preferences: LSP-aurelia Settings` command or opening it from the Sublime menu (`Preferences > Package Settings > LSP > Servers > LSP-aurelia`).

---

This package is inspired by [LSP-angular](https://github.com/sublimelsp/LSP-angular).
