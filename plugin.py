from lsp_utils import NpmClientHandler


def plugin_loaded():
	LspAureliaPlugin.setup()


def plugin_unloaded():
	LspAureliaPlugin.cleanup()


class LspAureliaPlugin(NpmClientHandler):
	package_name = __package__
	# server_directory = "server" # TODO: edit once working
	# server_binary_path = os.path.join(server_directory) # TODO: edit once working
