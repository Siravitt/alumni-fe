#!/bin/bash
cd "$(dirname "$0")"

# check: Is brew installed ?
if ! command -v brew &> /dev/null
then
		/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
		printf 'Install Homebrew...\t%s\n' "🌴 DONE"
else
		printf '%s (%s)\n' "🌴 \`brew\` is already installed" "$(brew --version)"
fi

# check: Is Node.js installed ?
if command -v node &> /dev/null
then
		version=$(node --version)
		printf '%s (%s)\n' "🌴 \`node\` command is ready" "$version"
else
		printf '%s\n' "🦺 Install nvm - Node Version Manager "
		if curl -sf https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash; then
				# add nvm to ~/.zshrc
				if [ -n "$ZSH_VERSION" ]; then
						if grep -q 'NVM_DIR=.*' ~/.zshrc; then
								echo "NVM_DIR already defined in ~/.zshrc"
						else
								cat <<EOF >> ~/.zshrc
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
EOF
						fi
				fi

				# add nvm to ~/.bashrc
				if [ -n "$BASH_VERSION" ]; then
						if grep -q 'NVM_DIR=.*' ~/.bashrc; then
								echo "NVM_DIR already defined in ~/.bashrc"
						else
								cat <<EOF >> ~/.bashrc
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
EOF
						fi
				fi

				printf '%s\n' "🌴 DONE"
		else
				printf '\t%s\n' "💔 FAIL"
		fi

fi
